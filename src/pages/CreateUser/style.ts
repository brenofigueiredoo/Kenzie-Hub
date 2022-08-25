import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .LinkButton {
    color: white;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 40px;

    background: #212529;
    border-radius: 4px;
  }
`;

export const Select = styled.select`
  width: 226px;
  height: 34px;

  border-radius: 5px;
  border: 1.2182px solid #f8f9fa;
  background-color: #343b41;
  color: white;
`;

export const ContainerButton = styled.div`
  padding-top: 15px;
`;
