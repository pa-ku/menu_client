import React from 'react'
import styled from 'styled-components'
import searchIcon from '../../../assets/images/search.svg'

const Input = styled.input`
  background-color: var(--lightbrown-700);
  border: 0px;
  text-decoration: none;
  border-radius: 8px;
  padding: 15px;
  padding-left: 35px;
  color: #ffffff;
  font-size: 15px;
  width: 100%;
  border: 2px solid var(--lightbrown-300);
  &::placeholder {
    color: #c4c3c3;
  }
  &:focus {
    outline: 0px;
  }
`

const SearchIcon = styled.img`
  width: 20px;
  fill: #fff;
  color: #fff;
  position: absolute;
  cursor: none;
  pointer-events: none;
  left: 11px;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 400px;
`

export default function SearchBar({ setQuery }) {
  return (
    <>
      <SearchContainer>
        <SearchIcon src={searchIcon} alt="icono de busqueda" />
        <Input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Buscar"
        />
      </SearchContainer>
    </>
  )
}
