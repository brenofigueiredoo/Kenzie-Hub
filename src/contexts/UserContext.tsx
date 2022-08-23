import axios from "axios";
import { ReactNode, useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IContextProviderProps {
  children: ReactNode;
}

interface IDataLogin {
  email: string;
  password: string;
}

export interface IDataCadastro {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUserContext {
  onCadastro: (data: IDataCadastro) => void;
  onSubmit: (data: IDataCadastro) => void;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any | undefined>>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const ContextProvider = ({ children }: IContextProviderProps) => {
  const [user, setUser] = useState<IDataLogin>();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://kenziehub.herokuapp.com/users/${localStorage.getItem(
          "idUser"
        )}`
      )
      .then((res) => {
        setUser(res.data);
        navigate("/home", { replace: true });
      });
  }, []);

  //Login
  const onSubmit = (data: IDataLogin) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        console.log(res);
        setUser(res.data.user);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        window.localStorage.setItem("idUser", res.data.user.id);
        navigate("/home", { replace: true });
        toast.success("Usuário logado com sucesso");
      })
      .catch((err) => {
        toast.error("Email ou senha incorreta");
      });
  };

  //Cadastro
  const onCadastro = (data: IDataCadastro) => {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then((res) => {
        console.log(res);
        toast.success("Usuário criado com sucesso");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        err.response.data.message === "Email already exists" &&
          toast.error("Email já cadastrado");
      });
  };

  return (
    <UserContext.Provider value={{ onCadastro, onSubmit, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default ContextProvider;
