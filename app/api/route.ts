import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords do not match",
    path: ["confirmPassword"],
  });

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();

  const result = signUpSchema.safeParse(body);
  let errors = {};
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      errors = { ...errors, [issue.path[0]]: issue.message };
    });
  }
  // when errors, send an object like this:
  // {errors: {fieldName: "error message"}}

  return NextResponse.json(
    Object.keys(errors).length > 0 ? { errors } : { success: true }
  );
}
