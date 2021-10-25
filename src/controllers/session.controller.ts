import { Request, Response } from "express";
import config from "config";
import {
	createSession,
	findSessions,
	updateSession,
} from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { signJwt } from "../utils/jwt.utils";
import logger from "../utils/logger";

// create user session with access token if password correct
export const createUserSessionHandler = async (req: Request, res: Response) => {
	try {
		const user = await validatePassword(req.body);

		if (!user) {
			return res.status(401).send("Invalid email or password");
		}

		const session = await createSession(user._id, req.get("user-agent") || "");

		const accessToken = signJwt(
			{ ...user, session: session._id },
			{ expiresIn: config.get("accessTokenTtl") }
		);

		const refreshToken = signJwt(
			{ ...user, session: session._id },
			{ expiresIn: config.get("refreshTokenTtl") }
		);

		return res.send({ accessToken, refreshToken });
	} catch (err: any) {
		logger.error(err);
		return res.status(409).send(err.message);
	}
};

export const getUserSessionsHandler = async (req: Request, res: Response) => {
	const userId = res.locals.user._id;
	const sessions = await findSessions({ user: userId, valid: true });

	return res.send(sessions);
};

export async function deleteSessionHandler(req: Request, res: Response) {
	const sessionId = res.locals.user.session;

	await updateSession({ _id: sessionId }, { valid: false });

	return res.send({
		accessToken: null,
		refreshToken: null,
	});
}
