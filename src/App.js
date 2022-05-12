import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { HomePage } from "./components/screens/HomePage";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((data) => setCharacters(data.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <HomePage characters={characters} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 648px) {
    width: 1200px;
  }
`;
