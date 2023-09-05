"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

// -- Zod ---
// 1. we defined the schema with z.object
// 2. pass all the value input to z.object
// 3. we can add more validation with refine (message, path: where the error will be shown)
// 4. then we can pass the schema to zodResolver and all the message from zod will be passed to formState.errors
// 5. we can get the Type from the form with z.infer<typeof schema>. Then pass the Type to useForm<Type>

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

type SignUpProps = z.infer<typeof signUpSchema>;

// --- React Hook Form ---
// 1. register every input you have
// 2. pass onSubmit to handlesubmit and get all data as an object
// 3. we can get specific field with getValues(fieldName)
// 4. below every form, we have "errors" object and call errors.fieldName to get the message
// 5. we can reset the form with reset() function
// 6. we can disable the submit button with isSubmitting
// 7. we can validate with these option like required, minLength, validate (value) (must satisfied a condition)

export default function FormWithoutReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    getValues,
    setError,
  } = useForm<SignUpProps>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpProps) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gap-y-2 flex flex-col">
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-base text-red-500">
          {errors.email.message as string}
        </p>
      )}
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="text-base text-red-500">
          {errors.password.message as string}
        </p>
      )}
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <p className="text-base text-red-500">
          {errors.confirmPassword.message as string}
        </p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="disabled:bg-gray-500 py-2 bg-blue-500 rounded"
      >
        Submit
      </button>
      <button
        onClick={async () => {
          const result = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
              email: "thelastofus2isnuts@gmail.com",
              password: "1321313",
              confirmPassword: 1232312313,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());

          if (result.errors) {
            const errors = result.errors;
            if (errors.email) {
              setError("email", { message: errors.email, type: "server" });
            }
            if (errors.password) {
              setError("password", {
                message: errors.password,
                type: "server",
              });
            }
            if (errors.confirmPassword) {
              setError("confirmPassword", {
                message: errors.confirmPassword,
                type: "server",
              });
            }
          }
        }}
        className="disabled:bg-gray-500 py-2 bg-blue-500 rounded"
      >
        Testing Error
      </button>
    </form>
  );
}
