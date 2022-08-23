import styled from "styled-components";

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 550px;
  padding: 2px;
  background-color: #212529;
  border-radius: 5px;

  p {
    font-size: 12px;
  }

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
    height: 36px;
    width: 220px;
    color: white;
    border: 1.2182px solid #ff577f;

    cursor: pointer;
  }

  .LinkButton {
    text-decoration: none;
    border-radius: 5px;
    background-color: #ff577f;
    height: 36px;
    width: 258px;
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
  }
`;
