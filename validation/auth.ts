import { z } from "zod";

// const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const userType = [
  {
    id: "guide",
    label: "Guide",
    value: "guide",
    description: "I want to offer my services as a guide",
  },
  {
    id: "traveler",
    label: "Traveler",
    value: "traveler",
    description: "I want to find guides and experiences",
  },
];

export const loginSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.email, {
    message: "Email is required",
    path: ["email"],
  });

export const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email address"),
  userType: z.enum(["traveler", "guide"]),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});
export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

// Type exports
export type LoginFormInput = z.infer<typeof loginSchema>;
export type SignupFormInput = z.infer<typeof signupSchema>;
export type ResetPasswordFormInput = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormInput = z.infer<typeof changePasswordSchema>;
