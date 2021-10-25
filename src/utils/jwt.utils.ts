import jwt from "jsonwebtoken";
import config from "config";

const privateKey = config.get<string>("privateKey");
const publicKey = config.get<string>("publicKey");

export const signJwt = (
	object: Object,
	options?: jwt.SignOptions | undefined
) => {
	return jwt.sign(object, privateKey, {
		...(options && options),
		algorithm: "RS256",
	});
};

// verify token by comparing with the one in the config file
export const verifyJwt = (token: string) => {
	try {
		const decoded = jwt.verify(token, publicKey);
		return {
			valid: true,
			expired: false,
			decoded,
		};
	} catch (err: any) {
		console.error(err);
		return {
			valid: false,
			expired: err.message === "jwt expired",
			decoded: null,
		};
	}
};
