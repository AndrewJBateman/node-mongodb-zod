import { object, string, TypeOf } from "zod";
export const createUserSchema = object({
  body: object({
    email: string({
      required_error: "An email is required",
    }).email("Not a valid email"),
    name: string({
      required_error: "A name is required",
    }),
    password: string({
      required_error: "A password is required",
    }).min(6, "Password must be at least 6 characters"),
    passwordConfirmation: string({
      required_error: "A password confirmation is required",
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

// This function is used by the user controller
// uses the above Create User Schema but omits the password
export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
