import React from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import DropdownButton from "./DropdownButton";

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
  z-index: 1;
  border-bottom: 2px solid #333;
`;

const TitleCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3em;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 90px;
  margin: 0px;
  padding: 0px;
  height: 110px;
  font-family: "Style Script", cursive;
`;
const Subtitle = styled.h2`
  color: #fff;
  font-size: 45px;
  font-family: "Style Script", cursive;
`;

const TitleLine = styled.div`
  border-radius: 20px;
  width: 260px;
  height: 2px;
  background-color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  z-index: 10;

  @media (max-width: 700px) {
    display: none;
  }
`;
const Button = styled.a`
  color: #a9acb4;
  text-decoration: none;
  font-weight: 800;
  text-transform: uppercase;
  &:hover {
    color: #fff;
  }
`;

const SearchBarContainer = styled.div`
  position: absolute;
  bottom: 20px;

  height: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function HeaderUi() {
  return (
    <HeaderContainer>
      <TitleCtn>
        <Title>Paul's</Title>
        <TitleLine></TitleLine>
        <Subtitle>Rooftop Bar</Subtitle>
      </TitleCtn>
      <ButtonContainer>
        <Button href="">Tapas</Button>
        <Button href="">Principales</Button>
        <Button href="">Pizzas</Button>
        <DropdownButton>Bebidas</DropdownButton>
        {/* Bebidas/aguas/cervezas/tragos/vinos y champagne */}

        <Button href="">Postres y cafeteria</Button>
        <Button href="">SIN T.A.C.C</Button>
      </ButtonContainer>
      <SearchBarContainer>
        <Searchbar />
      </SearchBarContainer>
    </HeaderContainer>
  );
}
