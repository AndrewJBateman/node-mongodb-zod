import { get } from "lodash";
import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";
import { reIssueAccessToken } from "../services/session.service";

// use Lodash get as it is safer if it is not sure of token exists
// remove "Bearer" from access token returned
const deserializeUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const accessToken = get(req, "headers.authorization", "").replace(
		/^Bearer\s/,
		""
	);
	const refreshToken = get(req, "headers.x-refresh");

	if (!accessToken) {
		return next();
	}

  // decoded means token valid
	const { decoded, expired } = verifyJwt(accessToken);

	if (decoded) {
		res.locals.user = decoded;
		return next();
	}

	if (expired && refreshToken) {
		const newAccessToken = await reIssueAccessToken({ refreshToken });

		if (newAccessToken) {
			res.setHeader("x-access-token", newAccessToken);
		}

		const result = verifyJwt(newAccessToken as string);

		res.locals.user = result.decoded;
		return next();
	}

	return next();
};

export default deserializeUser;
