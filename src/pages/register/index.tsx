import { CreateUserInput } from "@/schema/user.schema";
import { setToken, trpc } from "@/utils/trpc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const { mutate, error } = trpc.user.userRegister.useMutation({
    onSuccess: ({ accessToken }) => {
      setToken(accessToken);
      console.log(accessToken);
      router.push("/");
    },
  });

  const onSubmit = (values: CreateUserInput) => {
    mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        <label>
          Email
          <input
            type="email"
            placeholder="info@google.com"
            {...register("email")}
          />
        </label>

        <label>
          Name
          <input type="name" placeholder="Alex" {...register("name")} />
        </label>

        <label>
          Password
          <input type="password" placeholder="" {...register("password")} />
        </label>

        <button type="submit">Okay</button>

        {error && <p>{error.message}</p>}
      </form>

      <Link href="/login">Login</Link>
    </>
  );
};

export default RegisterPage;
