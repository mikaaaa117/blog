import { CreateUserInput, LoginUserSchema } from "@/schema/user.schema";
import { Typography } from "@/UI/Typography/Typography";
import { setToken, trpc } from "@/utils/trpc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  const router = useRouter();

  const { mutate, error } = trpc.user.userLogin.useMutation({
    onSuccess: ({ accessToken }) => {
      console.log(accessToken);
      setToken(accessToken);
      router.push("/");
    },
  });

  const onSubmit = (values: LoginUserSchema) => {
    console.log(values);
    mutate(values);
  };

  if (error && error.message)
    return <Typography variant="h1">{error.message}</Typography>;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Login</Typography>

        <label>
          Email
          <input
            type="email"
            placeholder="info@google.com"
            {...register("email")}
          />
        </label>

        <label>
          Password
          <input type="password" placeholder="" {...register("password")} />
        </label>

        <button type="submit">Okay</button>

        {/* {error && <p>{error.message}</p>} */}
      </form>

      <Link href="/register">Registration</Link>
    </>
  );
};

export default RegisterPage;
