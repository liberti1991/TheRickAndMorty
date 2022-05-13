import styled from "styled-components";

import { BiSearchAlt } from "react-icons/bi";

export const Input = ({ placeholder, onChange, value }) => {
  return (
    <ContaineirInput>
      <BiSearchAlt />
      <input type="search" placeholder={placeholder} onChange={onChange} value={value}></input>
    </ContaineirInput>
  );
};

const ContaineirInput = styled.div`
  text-align: center;
  transition: all .5s;

  :hover{
    color: orange;
  }
  
  svg {
    position: absolute;
    width: 25px;
    height: 25px;
    padding: 0 0 5px 5px;
  }

  input {
    border: none;
    color: orange;
    border-bottom: 1px solid white;
    background-color: transparent;
    position: relative;
    padding: 0 0 0.3em 2.5em; 
    width: 270px;
    transition: all .5s;
    
    :hover{
      border-bottom: 1px solid orange;
    }
    
    :focus {
      outline: 0;
    }

    ::placeholder {
      font-weight: 600;
    }
  }
`;
