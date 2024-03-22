import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.button`
font-size: 17px;
border-radius: 4px;
background-color: #654e00;
color:#ffd756;
padding: 14px 18px;
cursor: pointer;
border: none;
transition: 200ms;
font-weight: 600;
width: 100%;
&:hover{

  background-color: #947100;
}
`

const LinkStyle = styled(Link)`
font-size: 20px;
border-radius: 4px;
color:#333;
background-color: #ffd756;
padding: 14px 18px;
cursor: pointer;
border: none;
transition: 200ms;
font-weight: 600;
text-decoration: none;
&:hover{
  background-color: #ffe17e;
}
`

const AltButton = styled.button`
background-color: rgba(51, 51, 51, 0);
border: 0px;
color:#00b2da;
cursor: pointer;
transition: 200ms;
font-size: 16px;
margin: 0px;

${props => props.$modal && 'background-color: #333; padding: 10px 27px;border-radius: 8px; text-transform: uppercase;'}

${props => props.$red && 'color:#ff8383;'} 
${props => props.$blue && 'color:#27d7ff;'}
&:hover{
${props => props.$red && '  color:#ffabab;'}
${props => props.$blue && '  color:#a7efff;'}
}
`

export default function Button({ $modal, title, children, onClick, isLink, to, $altButton, $blue, $red }) {
  return (
    <>
      {isLink && <LinkStyle to={to} title={title} onClick={onClick}>{children} </LinkStyle>}

      {$altButton && <AltButton $modal={$modal} $red={$red} $blue={$blue} $altButton={$altButton} title={title} onClick={onClick}> {children}</AltButton>}

      {isLink != true && $altButton != true && <ButtonStyle altButton={$altButton} title={title} onClick={onClick}>{children}</ButtonStyle>}


    </>
  )
}
