import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { HomePage } from "./components/screens/HomePage";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const promises = [];

    new Array(42).fill("").forEach((item, index) => {
      const url = `https://rickandmortyapi.com/api/character/?page=${index + 1}`;

      const myPromise = axios.get(url);

      promises.push(myPromise);
    });

    const charactersList = [];

    Promise.allSettled(promises)
      .then((response) => {
        response.forEach((data) => {
          charactersList.push(...data.value.data.results);
        });
      })
      .then(() => {
        setCharacters(charactersList); 
      });
  },[]);

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