import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { HomePage } from "./components/screens/HomePage";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function App() {
  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const characters = [];
  //   // setTimeout(() => {
  //     new Array(42).fill("").forEach((item, index) => {
  //       axios
  //       .get(`https://rickandmortyapi.com/api/character/?page=${index + 1}`)
  //       .then((data) => {
  //         characters.push(...data.data.results);
  //         setCharacters(characters);
  //       });
  //     });
  //   // }, 1000);
  // }, []);

  useEffect(() => {
    const promises = [];

    const characters = [];

    new Array(42).fill("").forEach((item, index) => {
      const url = `https://rickandmortyapi.com/api/character/?page=${
        index + 1
      }`;

      const myPromise = axios.get(url);

      promises.push(myPromise);
    });

    Promise.allSettled(promises)
      .then((response) => {
        response.forEach((data) => {
          characters.push(...data.value.data.results);
        });
      })
      .then(() => {
        const newCharacters = getUniqueListBy(characters, "name");
        setCharacters(newCharacters); //
      });
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
