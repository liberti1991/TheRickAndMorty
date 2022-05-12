
import styled from "styled-components"
import logo from "../img/logo.png"

export const Logo =() => {
  return <Img src={logo} alt="Logo The Rick and Morty" />
}

const Img = styled.img`
  width: 280px;
`;