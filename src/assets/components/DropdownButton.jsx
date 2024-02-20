import React, { useState } from "react";
import styled from "styled-components";

const MainButton = styled.button`
  color: #a9acb4;
  text-decoration: none;
  font-weight: 800;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  display: flex;

  &:hover {
    color: #fff;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 40px;
  border-radius: 8px;
  background-color: #e3e3e3;
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
  color: #444;
  width: 100%;
  height: 100%;

  text-decoration: none;
  font-weight: 800;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
  font-size: 16px;
  text-transform: uppercase;
  &:hover {
    color: #1d7894;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function DropdownButton({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownWrapper>
        <MainButton onClick={() => (open ? setOpen(false) : setOpen(true))}>
          {children}
        </MainButton>
        {open && (
          <MenuContainer>
            <MenuButton>CERveza</MenuButton>
            <MenuButton>vino y champagne</MenuButton>
            <MenuButton>aguas</MenuButton>
            <MenuButton>tragos</MenuButton>
          </MenuContainer>
        )}
      </DropdownWrapper>
    </>
  );
}
