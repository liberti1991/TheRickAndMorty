import { useMemo } from "react";
import styled from "styled-components";

import { FooterPagination } from "../../hooks/FooterPagination";
import { usePagination } from "../../hooks/usePagination";

export const Card = ({ filteredCharacters }) => {
  // Pagination
  const { pagesVisited, pageCount, itemsPerPage, changePage } = usePagination(filteredCharacters);

  return (
    <>
      {filteredCharacters.length === 0 && (
        <ContainerLoading>
          <Loading>
            <div></div>
            <div></div>
            <div></div>
            <span>Loading...</span>
          </Loading>
        </ContainerLoading>
      )}
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

const ContainerLoading = styled.div`
  margin: 120px auto 300px;
  @media screen and (min-width: 648px) {
    grid-column: 1 / span 4;
  }
`;

const Loading = styled.div`
  width: 120px;
  height: 75px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;

  span {
    font-size: 22px;
    text-transform: uppercase;
    margin: auto;
  }

  div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: orange;
    animation: bounce 0.5s alternate infinite;

    :nth-child(2) {
      animation-delay: 0.16s;
    }

    :nth-child(3) {
      animation-delay: 0.32s;
    }

    @keyframes bounce {
      from {
        transform: scaleX(1.25);
      }
      to {
        transform: translateY(-50px) scaleX(1);
      }
    }
  }
`;

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
