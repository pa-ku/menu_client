import React from "react";

import HeaderUi from "../components/HeaderUi";
import {
  Tapas,
  principales,
  burguers,
  tragos,
  postresCafeteria,
  cervezas,
  vinosChampagne,
  promos,
  pizzas,
  menuSinTACC,
  aguasGaseosas,
} from "../../data";
import ScrollUpButton from "../components/ScrollUpButton";
import Items from "../components/Items";
import styled from "styled-components";


const ItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  flex-wrap: wrap;

  background-color: #333;
  height: 100%;
`;

export default function Home() {
  return (
    <>
      <HeaderUi />
      <ItemsWrapper>
        <Items objects={promos} title={"promos"} />
        <Items objects={Tapas} title={"Tapas"} />
        <Items objects={principales} title={"Principales"} />
        <Items objects={pizzas} title={"Pizzas"} />
        <Items objects={burguers} title={"Burguers"} />
        <Items objects={aguasGaseosas} title={"aguas y Gaseosas"} />
        <Items objects={tragos} title={"tragos"} />
        <Items objects={cervezas} title={"cervezas"} />
        <Items objects={vinosChampagne} title={"vinos y Champagne"} />
        <Items objects={postresCafeteria} title={"postres y Cafeteria"} />
        <Items objects={menuSinTACC} title={"Sin Tacc"} />
      </ItemsWrapper>
      <ScrollUpButton />
    </>
  );
}
