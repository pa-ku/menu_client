import React, { useState } from 'react'
import styled from 'styled-components'
import DropdownButton from './DropdownButton';
import RadioButton from './ui/RadioButton';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  z-index: 1;
  @media (max-width: 700px) {
    display: none;
  }
`;
const Button = styled.button`
cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
  text-decoration: none;
  border: 0px;
  color: #a9acb4;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }
  &.main-nav-btn{
  margin: 10px;
  font-size: 20px;
  color: #61d0ff;
 }
  &.main-nav-btn:hover{
  margin: 10px;
  color: #c4edff;
 }
`;


export default function NavDesktop({ setSelectCategory }) {

  const [index, setIndex] = useState(0)

  return (
    <>

      <ButtonContainer>
        <RadioButton name={"nav"} onClick={() => setSelectCategory("Todos")} $text={"Todos"} type="radio" />
        <RadioButton name={"nav"} onClick={() => setSelectCategory("Pizzas")} $text={"Pizzas"} type="radio" />
        <RadioButton name={"nav"} onClick={() => setSelectCategory("Tapas")} $text={"Tapas"} type="radio" />
        <RadioButton name={"nav"} onClick={() => setSelectCategory("Principales")} $text={"Principales"} type="radio" />
        <RadioButton name={"nav"} onClick={() => setSelectCategory("SinTacc")} $text={"Sin Tacc"} type="radio" />
              <DropdownButton >Bebidas</DropdownButton>
      </ButtonContainer>

    </>
  )
}
