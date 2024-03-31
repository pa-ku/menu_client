import React from 'react'
import ItemDesign from './ItemDesign'
import { data } from '../../data'
import styled from 'styled-components'
export default function ItemsRender({ title }) {
  return (
    <>
      <ItemsCtn>
        {data.map((item) => (
          <ItemDesign
            price={item.precio}
            description={item.descripcion}
            title={item.nombre}
            imgSrc
          />
        ))}
      </ItemsCtn>
    </>
  )
}

const ItemsCtn = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 20px;
  padding-block: 2em;

  @media (max-width: 700px) {
    gap: 2px;
    grid-template-columns: repeat(1, 1fr);
  }
`
