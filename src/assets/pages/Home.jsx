import { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import { data } from '../../data'
import Items from '../components/Items'
import NavDesktop from '../components/NavDesktop'
import ItemsRender from '../components/ItemsRender'

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

  /*   const catArr = [
    'Tapas',
    'Principales',
    'Tragos',
    'Postres y Cafetería',
    'Bebidas',
    'Cervezas',
    'Vinos y Champagne',
    'Promociones',
    'Pizzas',
    'SinTacc',
    'Aguas y Gaseosas',
    'Hamburguesas',
  ] */

  // in case "listOfCategories" is not predefined
  let listOfCategories = data.map((item) => item.categoria)
  // sort and remove duplicates
  listOfCategories = listOfCategories
    .sort()
    .filter((v, i) => listOfCategories.indexOf(v) === i)

  return (
    <>
      <HomeWrapper>
        <Header setQuery={setQuery} setSelectCategory={setSelectCategory} />
        <Section>
          <NavDesktop setSelectCategory={setSelectCategory} />
          <ItemsRender />
          {/*      <Items searchItem={query} category={selectCategory} data={data} /> */}
        </Section>
      </HomeWrapper>
    </>
  )
}
const Section = styled.section`
  padding-block: 3em;
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
  }
`
