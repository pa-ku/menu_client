import React from "react";
import styled from "styled-components";
import NavDesktop from "./NavDesktop";
import SearchBar from "./ui/SearchBar";



const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: #222;
  padding-bottom: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-bottom: 2px solid #333;
`;

const TitleCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3em;
  & * {
      font-family: "Lobster Two", sans-serif;
font-weight:200;
font-style: italic;
  }
opacity: 0;
animation: showHeader 1s forwards;
@keyframes showHeader {
  to{
    opacity: 1;
  }
}
`;

const Title = styled.h1`
  color: #fff;
  font-size: 80px;
  margin: 0px;
  padding: 0px;
`;
const Subtitle = styled.h2`
  color: #fff;
  font-size: 40px;
`;

const TitleLine = styled.div`
  border-radius: 20px;
  width: 260px;
  height: 2px;
  background-color: #fff;
`;

const SearchBarContainer = styled.div`
  position: absolute;
width: 400px;
  height: 10px;
bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
 
@media(max-width:700px){
  width: 100%;
padding-inline: 10px;
}
`;
export default function Header({ setQuery, setSelectCategory }) {
  return (
    <HeaderContainer>
      <TitleCtn>
        <Title>Paul's</Title>
        <TitleLine></TitleLine>
        <Subtitle>Rooftop Bar</Subtitle>
      </TitleCtn>
      <NavDesktop setSelectCategory={setSelectCategory} />
      <SearchBarContainer>
        <SearchBar setQuery={setQuery} />
      </SearchBarContainer>
    </HeaderContainer>
  );
}
