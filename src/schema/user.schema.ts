import { object, string, TypeOf } from "zod";
export const createUserSchema = object({
	body: object({
		name: string({
			required_error: "A name is required",
		}),
		password: string({
			required_error: "A password is required",
		}).min(6, "Password must be at least 6 characters"),
		passwordConfirmation: string({
			required_error: "A password confirmation is required",
		}),
		email: string({
			required_error: "An email is required",
		}).email("Not a valid email"),
	}).refine((data) => data.password === data.passwordConfirmation, {
		message: "Passwords do not match",
		path: ["passwordConfirmation"],
	}),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;