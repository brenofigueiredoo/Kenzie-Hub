import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkSair = styled(Link)`
  color: white;
  text-decoration: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;

  width: 50px;
  height: 40px;

  background: #212529;
  border-radius: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px gray solid;

  h1 {
    color: #ff577f;
  }
`;

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px gray solid;
  width: 100vw;

  h2 {
    color: white;
  }
  p {
    color: #868e96;
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: column;

  .divTitleTech {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .sectionList {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    .divUl {
      width: 50%;
    }
  }

  div button {
    background: #212529;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  h2 {
    color: white;
    font-size: 16px;
  }
`;

export const DivUl = styled.div`
  width: 60%;
  height: 340px;

  background: #212529;
  border-radius: 4px;

  li {
    padding: 0px 12px;
    margin-top: 10px;
  }

  ul {
    padding: 0px 8px;
  }

  .liTechs {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #121214;
    border-radius: 5px;
  }

  .divStatusAndButton {
    display: flex;
    gap: 10px;

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
      text-align: right;
      color: #868e96;
    }

    button {
      border: none;
      background-color: transparent;
    }
  }
`;
