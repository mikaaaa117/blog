import { CreateUserInput } from "@/schema/user.schema";
import { trpc } from "@/utils/trpc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { handleSubmit, register } = useForm<CreateUserInput>();
  // const router = useRouter();

  // const { mutate, error } = trpc.user.userRegister.useMutation({
  //   onError: (error) => { },
  //   onSuccess: () => {
  //     router.push("/login");
  //   },
  // });

  const onSubmit = (values: CreateUserInput) => {
    // mutate(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        <label>
          Email
          <input
            type="email"
            placeholder="info@google.com"
            {...register("email")}
          />
        </label>

        <button type="submit">Okay</button>

        {/* {error && <p>{error.message}</p>} */}
      </form>

      <Link href="/register">Registration</Link>
    </>
  );
};

export default RegisterPage;
