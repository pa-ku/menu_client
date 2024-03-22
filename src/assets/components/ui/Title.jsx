import React from 'react'
import styled from 'styled-components'


const TitleStyle = styled.h2`
  color: #fff;
  font-size:30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  padding: 40px;
  width: 100%;
    ${props => props.$altTitle && 'font-size:30px; padding:0px;text-align: start;'}
  @media(max-width:700px){
  width: 100%;
  font-size:30px;
  }
`

export default function Title({ children, $altTitle }) {
  return (
    <TitleStyle $altTitle={$altTitle}>{children}</TitleStyle>
  )
}
