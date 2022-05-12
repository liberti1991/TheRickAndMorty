import styled from "styled-components";

export const LivingCharacters = ({ filteredCharacters }) => {
  return (
    <List>
      <li>Alive: <span>{filteredCharacters.filter((status) => status.status === "Alive" ).length}</span></li>
      <li>Dead: <span>{filteredCharacters.filter((status) => status.status === "Dead").length}</span></li>
      <li>Unknown: <span>{filteredCharacters.filter((status) => status.status === "unknown").length}</span></li>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 20px;
  
  li{
    display: flex;
    align-items: center;
    gap:10px;
    font-weight: 600;

    span{
      color: white;
    }

    :nth-child(1){
      color: green;
    }

    :nth-child(2){
      color: red;
    }
    
    :nth-child(3){
      color: gray;
    }
  }
`;
