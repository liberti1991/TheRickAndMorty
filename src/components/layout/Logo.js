import styled from "styled-components";

import img from "../../img/logo.png";

export const Logo = () => {
  return <Img src={img} alt="Logo The Rick and Morty" />;
};

const Img = styled.img`
  width: 280px;
`;
