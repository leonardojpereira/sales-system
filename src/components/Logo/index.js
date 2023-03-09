import { LogoContainer, LogoImg, Title } from './style';
import logo from '../../img/logo.png';

export default function Logo() {
    return(
        <LogoContainer>
        <LogoImg src={logo} alt="logo"/>
       <Title>Sistema de vendas</Title>
  </LogoContainer>
    )
}