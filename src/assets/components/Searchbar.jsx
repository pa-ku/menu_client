import React from "react";
import styled from "styled-components";
import searchIcon from "../images/search.svg";

const SearchBar = styled.input`
  background-color: #444;
  border: 0px;
  text-decoration: none;
  border-radius: 8px;
  padding: 15px;
  padding-left: 35px;
  color: #ffffff;
  font-size: 15px;
  max-width: 30em;
  bottom: -45px;
  border: 2px solid #333;
  &::placeholder {
    color: #c4c3c3;
  }
`;

const SearchIcon = styled.img`
  width: 20px;
  fill: #fff;
  color: #fff;
  position: absolute;
  cursor: none;
  pointer-events: none;
  left: 11px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 50px;
  width: max-content;
`;

export default function Searchbar() {
  return (
    <>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="" />
        <SearchBar type="text" placeholder="Buscar" />
      </SearchContainer>
    </>
  );
}
