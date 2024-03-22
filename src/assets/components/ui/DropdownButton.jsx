import React, { useState } from "react";
import styled from "styled-components";


const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const MainButton = styled.button`
  color: #a9acb4;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  position: relative;
  display: flex;
  &:hover {
    color: #fff;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 30px;
  border-radius: 8px;
  background-color: #111;
  width: 200px;
  padding-block: 1em;
  height: max-content;
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: 200ms openMenu;
  @keyframes openMenu {
    0%{
opacity: 0;
    }

    100%{
        opacity: 1;
    }
  }
`;

const MenuButton = styled.button`
  color: #999;
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  &:hover {
    color: #38a1c2;
  }
`;

export default function DropdownButton({ children, setSelectCategory }) {
  const [open, setOpen] = useState(false);

  function handleModal() {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <>
      <DropdownWrapper onClick={handleModal}>
        <MainButton >
          {children}
        </MainButton>
        {open && (
          <MenuContainer>
            <MenuButton onClick={() => setSelectCategory("Cervezas")}>Cervezas</MenuButton>
            <MenuButton onClick={() => setSelectCategory("Vinos y Champagne")}>vino y champagne</MenuButton>
            <MenuButton onClick={() => setSelectCategory("Aguas y Gaseosas")}>Aguas y Gaseosas</MenuButton>
            <MenuButton onClick={() => setSelectCategory("Tragos")}>tragos</MenuButton>
          </MenuContainer>
        )}

      </DropdownWrapper>
    </>
  );
}
