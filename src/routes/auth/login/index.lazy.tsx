import { createLazyFileRoute } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Error } from "@components/ui/form";
import styles from './index.module.scss';


const schema = z.object({
  email: z.email({message: "Invalid email."}),
  password: z.string().min(8, {message: "Password must be at least 8 characters."})
});

type FormFields = z.infer<typeof schema>;

export const Route = createLazyFileRoute('/auth/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors, isSubmitting}
  } = useForm<FormFields>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
    } catch (e) {
      console.error(e);
      setError("email", {message: "Invalid credentials"});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <label>Email</label>
        <input {...register("email")} type="email" placeholder="Email"/>
        <Error error={errors.email}/>
        <label>Password</label>
        <input {...register("password")} type="password" placeholder="Password"/>
        <Error error={errors.password}/>
        <button className="black" disabled={isSubmitting} type="submit">Login</button>
      </form>
    </>
  );
} 