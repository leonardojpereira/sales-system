import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Sans-Serif;
  }
`;
 

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 22px;
`;

export const DisplaySale = styled.div``;


