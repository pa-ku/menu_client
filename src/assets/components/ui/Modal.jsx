import React from 'react'
import styled from 'styled-components'

const ModalStyle = styled.dialog`
padding: 40px;
display: ${props => props.$modalIsOpen ? 'flex' : 'none'};
position: fixed;
top: 0px;
bottom: 0px;
right: 0px;
margin: auto;
left: 0px;
color: #fff;
background-color: #444;
border: 4px solid #555;
border-radius: 8px;
text-align: center;
flex-direction: column;
gap: 20px;
text-transform: uppercase;
`

export default function Modal({ children, $modalIsOpen }) {
    return (
        <>
            <ModalStyle $modalIsOpen={$modalIsOpen}>
                {children}
            </ModalStyle>
        </>
    )
}
