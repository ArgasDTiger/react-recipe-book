import { createLazyFileRoute } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Error } from "@components/ui/form";
import { useState } from "react";

const schema = z.object({
  email: z.email({message: "Invalid email."}),
  password: z.string().min(8, {message: "Password must be at least 8 characters."}),
  passwordConfirm: z.string(),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords do not match",
  path: ["passwordConfirm"]
});

type FormFields = z.infer<typeof schema>;

export const Route = createLazyFileRoute('/auth/register/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [responseErrorMessage, setResponseErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting, isValid}
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (e) {
      console.error(e);
      setResponseErrorMessage("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <FormField
        label='Email'
        name='email'
        register={register}
        error={errors.email}
        type="email"
      />
      <FormField
        label='Password'
        name='password'
        register={register}
        error={errors.password}
        type="password"
      />
      <FormField
        label='Confirm Password'
        name='passwordConfirm'
        register={register}
        error={errors.passwordConfirm}
        type="password"
      />
      <button className="black" disabled={!isValid || isSubmitting} type="submit">Register</button>
      {responseErrorMessage && <Error/>}
    </form>
  );
}