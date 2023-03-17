import styled from "styled-components";

export const SaleForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 830px) {
    display: contents;
  }
`;

export const InputInfoSale = styled.input`
  width: 120px;
  height: 30px;
  padding-left: 4px;
  border: none;
  border-bottom: solid 2px #ff7917;
  outline: none;
  margin: 0 22px;
  @media (max-width: 830px) {
    width: 100%;
    margin: 0 0 22px 0;
  }
`;

export const ButtonSubmit = styled.button`
  width: 120px;
  height: 30px;
  background-color: #ff7917;
  border-radius: 4px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: ease 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 830px) {
    width: 100%;
  }
`;
