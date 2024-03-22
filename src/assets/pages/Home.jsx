import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ScrollUpButton from "../components/ui/ScrollUpButton";
import NavMobile from "../components/NavMobile";
import { data } from "../../data";
import Items, { RenderItems } from "../components/Items";
import useUnique from "../hooks/useUnique";
import { useEffect } from "react";
import Title from "../components/ui/Title";
import Text from "../components/ui/Text";
/* import { data } from '../../dataTesting' */

const HomeWrapper = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

padding-bottom: 2em;
`

export default function Home() {
  const [query, setQuery] = useState('')
  const [selectCategory, setSelectCategory] = useState('Todos')

  const catArr = ['Tapas', 'Principales', 'Tragos', 'Postres y Cafetería', 'Bebidas', 'Cervezas', 'Vinos y Champagne', 'Promociones', 'Pizzas', 'SinTacc', 'Aguas y Gaseosas', 'Hamburguesas']

  // in case "listOfCategories" is not predefined
  let listOfCategories = data.map(item => item.categoria)
  // sort and remove duplicates
  listOfCategories = listOfCategories.sort().filter((v, i) => listOfCategories.indexOf(v) === i);

  return (
    <>
      <HomeWrapper>
        <Header setQuery={setQuery} setSelectCategory={setSelectCategory} />
        <NavMobile />

        {/*   <Items searchItem={query} category={selectCategory} data={data} /> */}

        {listOfCategories.map(cat => (
            <Text>{cat}</Text>
          {data.filter(ite-m =>(

          ))}

        ))}
      </HomeWrapper>
    </>
  );
}
