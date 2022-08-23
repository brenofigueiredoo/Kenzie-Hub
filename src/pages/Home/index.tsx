import {
  Container,
  ContainerTechs,
  ContainerMain,
  LinkSair,
  DivUl,
} from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import ModalAddTechs from "../../components/ModalAddTech/index";
import { toast } from "react-toastify";

export interface IModalAddTechsProps {
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ITechs {
  title: string;
  status: string;
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
}

export function Home() {
  const [isModal, setIsModal] = useState(false);
  const [user, setUser] = useState<IUser>();

  const token = window.localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [isModal]);

  const atualizarListTech = () => {
    axios
      .get(`https://kenziehub.herokuapp.com/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  function deleteTech(tech_id: any) {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${tech_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Tecnologia deletada!");
        atualizarListTech();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container>
        <h1>Kenzie Hub</h1>
        <LinkSair to={"/"} onClick={() => window.localStorage.clear()}>
          Sair
        </LinkSair>
      </Container>
      <ContainerMain>
        <h2>Olá, {user && user.name}</h2>
        <p>{user && user.course_module}</p>
      </ContainerMain>
      <ContainerTechs>
        <div className="divTitleTech">
          <h2>Tecnologias</h2>
          <button onClick={() => setIsModal(!isModal)}>
            <IoMdAdd size={18} />
          </button>
        </div>
        {isModal && <ModalAddTechs setIsModal={setIsModal} />}
        <section className="sectionList">
          <DivUl className="divUl">
            <ul>
              {user &&
                user.techs.map((elem, index) => (
                  <li key={index} className="liTechs">
                    <h2>{elem.title}</h2>
                    <div className="divStatusAndButton">
                      <h3>{elem.status}</h3>
                      <button onClick={() => deleteTech(elem.id)}>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </DivUl>
        </section>
      </ContainerTechs>
    </>
  );
}
