import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Select } from "./style";
import { H1 } from "../../components/H1";
import { Link } from "react-router-dom";
import { FormMain } from "../../components/Form/style";
import { useContext } from "react";
import { IDataCadastro, UserContext } from "../../contexts/UserContext";

export function CreateUser() {
  const { onCadastro } = useContext(UserContext);

  const schema = yup.object({
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Precisa ser um email válido"),
    password: yup
      .string()
      .required("Senha é obrigatória")
      .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "deve conter ao menos 1 número")
      .matches(/(\W)|_/, "deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
    name: yup.string().required("Nome é obrigatória"),
    bio: yup.string().required("Bio é obrigatório"),
    contact: yup.string().required("A opção de contato é obrigatório"),
    course_module: yup.string().required("Módulo do curso é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataCadastro>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Container>
        <H1>Kenzie Hub</H1>
        <Link className="LinkButton" to={"/"}>
          Voltar
        </Link>
      </Container>
      <FormMain onSubmit={handleSubmit(onCadastro)}>
        <h2>Crie sua conta</h2>
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="password" placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>
        <input type="text" placeholder="Nome" {...register("name")} />
        <p>{errors.name?.message}</p>
        <input type="text" placeholder="Bio" {...register("bio")} />
        <p>{errors.bio?.message}</p>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>
        <Select {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </Select>
        <p>{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </FormMain>
    </>
  );
}
