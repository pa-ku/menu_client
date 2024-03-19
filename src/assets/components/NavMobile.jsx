import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #222;
  padding: 8px 12px;
  border-radius: 7px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
  &:hover {
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  display: none;
@media(max-width:700px){
  align-items: center;
justify-content: center;
display: grid;
grid-template-columns: repeat(2,1fr);
padding-top: 50px;
padding-inline: 20px;
  height: 200px;
  width: 100%;
gap: 10px;
  z-index: 10;
}
`;

export default function NavMobile() {
  return (
    <>
      <ButtonContainer>
        <Button href="#tapas">Tapas</Button>
        <Button href="#tapas">Vinos</Button>
        <Button to="#principales">Principales</Button>
        <Button to="pizzas">Pizzas</Button>
        <Button to="">Postres y cafeteria</Button>
        <Button to="">SIN T.A.C.C</Button>
      </ButtonContainer>

    </>
  )
}
