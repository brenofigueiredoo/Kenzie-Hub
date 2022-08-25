import styled from "styled-components";

export const FormMainLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 260px;
  height: 430px;
  background-color: #212529;
  border-radius: 5px;
  padding: 3px;

  input {
    border-radius: 5px;
    border: 1.2182px solid #f8f9fa;
    width: 220px;
    height: 30px;
    background-color: #343b41;
    color: white;
  }

  input::placeholder {
    color: white;
  }

  button {
    border-radius: 5px;
    background-color: #ff577f;
    height: 34.43px;
    width: 226px;
    color: white;
    border: 1.2182px solid #ff577f;

    cursor: pointer;
  }

  .LinkButton {
    text-decoration: none;
    border-radius: 5px;
    background-color: #868e96;
    height: 34.43px;
    width: 226px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  h2 {
    color: white;
  }

  p {
    color: white;
    font-size: 14px;
    margin: 10px 0px;
  }

  .passwordVisible {
    position: absolute;
  }
`;

export const ContainerPassword = styled.div`
  .conteiner-password {
    display: flex;
    flex-direction: row;
    width: 226.43px;

    margin-bottom: 15px;

    input {
      border-right: none;
      border-radius: 0px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    .password-icon {
      border: 1px solid #f8f9fa;
      border-left: none;
      width: 8%;
      height: 32.42px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      margin-bottom: 5px;
      background-color: #343b41;
      color: white;
      padding-right: 8px;
      cursor: pointer;
    }
  }
`;
