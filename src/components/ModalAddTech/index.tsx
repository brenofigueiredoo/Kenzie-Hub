import axios from "axios";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IModalAddTechsProps } from "../../pages/Home";
import { Container, SectionMainModal } from "./style";

interface IDataAddTechs {
  title: string;
  status: string;
}

const ModalAddTechs = ({ setIsModal }: IModalAddTechsProps) => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const token = window.localStorage.getItem("authToken");

  const onSubmit = (data: IDataAddTechs) => {
    axios
      .post("https://kenziehub.herokuapp.com/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Tecnologia adicionada!");
        setIsModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Tecnologia não adicionada");
      });
  };

  return (
    <SectionMainModal>
      <Container>
        <div className="divHeaderTechs">
          <h3>Cadastrar Tecnologias</h3>
          <button className="buttonAddTech" onClick={() => setIsModal(false)}>
            <AiOutlineClose size={18} />
          </button>
        </div>
        <div className="divInputsTechs">
          <div className="inputTech">
            <p>Nome</p>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Tecnologia"
            />
          </div>
          <div>
            <p>Selecionar status</p>
            <select
              onChange={(e) => setSelectValue(e.target.value)}
              value={selectValue}
            >
              <option value="" selected disabled hidden>
                Selecione o status
              </option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
        </div>
        <div className="divButtonCadastrar">
          <button
            className="buttonCadastrarTech"
            onClick={() => onSubmit({ title: inputValue, status: selectValue })}
          >
            Cadastrar Tecnologia
          </button>
        </div>
      </Container>
    </SectionMainModal>
  );
};
export default ModalAddTechs;
