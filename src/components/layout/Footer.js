import styled from "styled-components";

export const Footer = () => {
  return (
    <Copyright>
      <a href="https://api.whatsapp.com/send?phone=5541997000028&text=Olá.%20Gostaria%20de%20fazer%20um%20projeto.%20" target="_blank" rel="noopener noreferrer" title="Whatsapp">
        © 2022 - Rodrigo Liberti.
      </a>
    </Copyright>
  );
};
const Copyright = styled.div`
  border-top: 1px solid gray;
  text-align: center;
  padding: 30px 0;
  a {
    color: gray;
    text-decoration: none;
  }
`;
