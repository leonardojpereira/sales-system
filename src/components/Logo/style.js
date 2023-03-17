import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px 0 40px 0;
  @media (max-width: 490px) {
    flex-direction: column;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const Title = styled.h1`
  margin-top: 12px;
  color: #ff7917;
  text-shadow: #2e2e2e 3px 3px 3px;
  text-align: center;
`;
