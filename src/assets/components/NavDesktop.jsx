import React, { useState } from 'react'
import styled from 'styled-components'
import DropdownButton from './ui/DropdownButton';
import RadioButton from './ui/RadioButton';

const ButtonWrapper = styled.div`

`
const ButtonContainer = styled.div`
display: grid;
align-items: center;
justify-content: center;

grid-template-columns: repeat(3,200px);
  gap: 5px;
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
  & *{
    font-size: 16px;
    border-radius: 4px;

    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: #333;
  }
`;

export default function NavDesktop({ setSelectCategory }) {
  const [index, setIndex] = useState(0)
  const catArr = ['Tapas', 'Principales', 'Tragos', 'Postres y Cafetería', 'Bebidas', 'Cervezas', 'Vinos y Champagne', 'Promociones', 'Pizzas', 'SinTacc', 'Aguas y Gaseosas', 'Hamburguesas']
  return (
    <>
      <ButtonWrapper>

        <ButtonContainer>
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Todos")} $text={"Todos"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Promociones")} $text={"Promociones"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Principales")} $text={"Principales"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Pizzas")} $text={"Pizzas"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Tapas")} $text={"Tapas"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Hamburguesas")} $text={"Hamburguesas"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Postres y Cafetería")} $text={"Postres y Cafetería"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("SinTacc")} $text={"Sin Tacc"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Bebidas")} $text={"Bebidas"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Tragos")} $text={"Tragos"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Vinos y Champagne")} $text={"Vinos y Champagne"} type="radio" />
          <RadioButton name={"nav"} onClick={() => setSelectCategory("Aguas y Gaseosas")} $text={"Aguas y Gaseosas"} type="radio" />

        </ButtonContainer>
      </ButtonWrapper>
    </>
  )
}
