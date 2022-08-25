import styled from "styled-components";

export const FormMain = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 266px;
  height: 640px;
  background-color: #212529;
  border-radius: 5px;

  p {
    font-size: 12px;
    margin: 6px 0px;
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
    height: 34.42px;
    width: 226px;
    color: white;
    border: 1.2182px solid #ff577f;

    cursor: pointer;
  }

  h2 {
    color: white;
  }

  p {
    color: white;
  }
`;
