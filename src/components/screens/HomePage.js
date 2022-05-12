import { useState } from "react";
import styled from "styled-components";

import { Input } from "../layout/Input";
import { Card } from "./cards/Card";

export const HomePage = ({ characters }) => {
  const handleSearch = (e) => setSearch(e.target.value);

  //filter
  const [search, setSearch] = useState("");
  const LowerSearch = search.toUpperCase();
  const filteredCharacters = characters.filter((characters) => characters.name.toUpperCase().includes(LowerSearch));

  return (
    <>
      <Input placeholder={"Search..."} value={search} onChange={handleSearch} />
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
