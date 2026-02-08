import { isEmailExist } from "services/client/api.service";
import { z } from "zod";

const emailSchema = z
  .email({
    error: "Email không đúng định dạng",
  })
  .refine(
    async (email) => {
      const existingUser = await isEmailExist(email);
      return !existingUser;
    },
    {
      error: "Email đã tồn tại",
      path: ["email"],
    },
  );

export const RegisterSchema = z
  .object({
    fullName: z.string().trim().min(1, { error: "Tên không được để trống" }),
    email: emailSchema,
    password: z
      .string()
      .min(3, {
        error: "Mật khẩu phải có ít nhất 3 ký tự",
      })
      .max(20, {
        error: "Mật khẩu không được vượt quá 20 ký tự",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Mật khẩu xác nhận không chính xác",
    path: ["confirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof RegisterSchema>;
