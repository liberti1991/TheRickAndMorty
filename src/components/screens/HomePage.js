import { useCallback, useState } from "react";
import styled from "styled-components";

import { Input } from "../layout/Input";
import { Logo } from "../layout/Logo";
import { Card } from "./cards/Card";
import { LivingCharacters } from "../layout/LivingCharacters";

export const HomePage = ({ characters }) => {
  // const [resetPag, setResetPag] = useState(-1);
  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
    // {e.target.value.length > 0 ? setResetPag(0) : setResetPag(0)  }
    // console.log(resetPag)
  }, []);

  //filter
  const [search, setSearch] = useState("");
  const LowerSearch = search.toUpperCase();
  const filteredCharacters = characters.filter((characters) => characters.name.toUpperCase().includes(LowerSearch));

  return (
    <>
      <Logo />
      <Header>
        <Input placeholder={"Search..."} value={search} onChange={handleSearch} />
        <LivingCharacters filteredCharacters={filteredCharacters} />
      </Header>
      <Container>
        <Card filteredCharacters={filteredCharacters} />
      </Container>
    </>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 10px;

  @media screen and (min-width: 648px) {
    section {
      grid-column: 1 / span 4;
    }
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;
  flex-direction: column;
  
  @media screen and (min-width: 648px) {
    flex-direction: row;
    padding: 10px 30px;
  }

`;
