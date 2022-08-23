import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { FormMainLogin } from "./style";
import { H1 } from "../../components/H1";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const { onSubmit } = useContext(UserContext);

  const schema = yup.object({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("O email tem que ser válido"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <H1>Kenzie Hub</H1>
      <FormMainLogin onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <p>Email</p>
          <input type="text" placeholder="Email" {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <p>Senha</p>
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Entrar</button>
        <p>Ainda não possui conta ?</p>
        <Link className="LinkButton" to={"/cadastrar"}>
          Cadastre-se
        </Link>
      </FormMainLogin>
    </>
  );
}
