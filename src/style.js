import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 22px;
`;

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

export const ErrorContainer = styled.div``;

export const ErrorMessage = styled.p`
  margin-top: 22px;
  color: red;
`;

export const DisplaySale = styled.div``;

export const SalesTable = styled.table`
  width: 100%;
  max-width: 1260px;
  border-collapse: collapse;
  margin: 22px auto;
`;

export const TableBody = styled.tbody`
  @media (max-width: 830px) {
    display: block;
    width: 100%;
  }
`;

export const Tr = styled.tr`
  @media (max-width: 830px) {
    display: block;
    width: 100%;
    margin-bottom: 22px;
  }
`;

export const GridItem = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 16px;
  nth-of-type(odd) {
    background-color:#000;
    }
  &:last-child {
    border-bottom-left-radius: 8px;
  }
  @media (max-width: 830px) {
    display: block;
    width: 100%;
    padding-left: 50%;
    text-align: right;
    position: relative;
    &::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
`;

export const IconEdit = styled.span`
  color: #0cc0df;
  font-size: 16px;
  cursor: pointer;
`;

export const IconCancelEdit = styled.span`
  color: rgb(190, 67, 67);
  font-size: 16px;
  cursor: pointer;
`;

export const IconDelete = styled.span`
  color: rgb(190, 67, 67);
  cursor: pointer;
  font-size: 14px;
`;
