import { useMemo } from "react";
import styled from "styled-components";

import { FooterPagination } from "../../hooks/FooterPagination";
import { usePagination } from "../../hooks/usePagination";

export const Card = ({ filteredCharacters }) => {
  // Pagination
  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(filteredCharacters);

  return (
    <>
      {useMemo(() => {
        return filteredCharacters.slice(pagesVisited, pagesVisited + itemsPerPage).map((character) => {
          return (
            <ConteinerCard key={character.id}>
              <img src={character.image} alt={character.name} />
              <h1>{character.name}</h1>
              <Description>
                <Dot color={character.status === "Alive" ? "green" : character.status === "Dead" ? "red" : "grey"}></Dot>
                <p>{character.status} - {character.species}</p>
              </Description>
              <p>Gender: <span>{character.gender}</span></p>
              {character.type.length > 0 ? <p>Type: <span>{character.type}</span></p> : null}
              <p>Origin: <span>{character.origin.name}</span></p>
              <p>Location: <span>{character.location.name}aham</span></p>
            </ConteinerCard>
          );
        });
      }, [filteredCharacters, itemsPerPage, pagesVisited])}

      <section>
        <FooterPagination changePage={changePage} pageCount={pageCount} />
      </section>
    </>
  );
};

const ConteinerCard = styled.div`
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 100ms ease-in-out;

  :hover {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    transform: scale(1.03);
  }

  h1 {
    color: orange;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }
  p {
    span {
      color: grey;
      font-size: 0.9rem;
    }
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 5px;
`;

const Dot = styled.span`
  display: inline-block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  background-color: ${(p) => {
    return p.color;
  }};
`;
