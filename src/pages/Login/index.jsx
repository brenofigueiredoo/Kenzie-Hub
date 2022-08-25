import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { ContainerPassword, FormMainLogin } from "./style";
import { H1 } from "../../components/H1";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export function Login() {
  const { onSubmit } = useContext(UserContext);

  const [visible, setVisible] = useState(false);

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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <H1>Kenzie Hub</H1>
        <FormMainLogin onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <div>
            <p>Email</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>

          <ContainerPassword>
            <p>Senha</p>
            <div className="conteiner-password">
              {visible ? (
                <>
                  <input
                    type="text"
                    {...register("password")}
                    placeholder="Senha"
                    id="password"
                  />
                  <IoMdEye
                    className="password-icon"
                    onClick={() => setVisible(false)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Senha"
                    id="password"
                  />
                  <IoIosEyeOff
                    className="password-icon"
                    onClick={() => setVisible(true)}
                  />
                </>
              )}
              <p>{errors.password?.message}</p>
            </div>
          </ContainerPassword>
          <button type="submit">Entrar</button>
          <p>Ainda não possui conta ?</p>
          <Link className="LinkButton" to={"/cadastrar"}>
            Cadastre-se
          </Link>
        </FormMainLogin>
      </motion.div>
    </>
  );
}
