import styled from "styled-components";

export const SectionMainModal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 360px;
  padding-bottom: 20px;

  .divHeaderTechs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 44px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;

    .buttonAddTech {
      color: #868e96;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    h3 {
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #f8f9fa;
    }
  }

  .divInputsTechs {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div {
      flex-direction: column;
    }

    input {
      background: #343b41;
      border: 1px solid #f8f9fa;
      border-radius: 4px;
      color: white;
      width: 240px;
      height: 32px;
    }

    input::placeholder {
      color: gray;
    }

    select {
      background: #343b41;
      border: 1.2182px solid #f8f9fa;
      border-radius: 4px;
      color: gray;
      width: 246px;
      height: 36px;
    }

    option {
      color: white;
    }

    p {
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px;
      color: #f8f9fa;
    }
  }

  .buttonCadastrarTech {
    margin-top: 14px;
    background: #ff577f;
    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;
    width: 240px;
    height: 32px;
  }

  .divButtonCadastrar {
    display: flex;
    justify-content: center;
  }
`;
