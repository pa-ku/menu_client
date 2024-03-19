import React from 'react'
import styled from 'styled-components'

const Radio = styled.input`
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            -o-appearance: none;
            appearance: none;
            transition: 500ms;
            font-weight: 500;
            border-color: #717171;
            padding: 3px;
            min-width: 20px;
            padding-inline: 15px;
            color: #222;
            text-align: center;
            cursor: pointer;
            font-size: 20px;
            border-block: 2px solid rgba(255, 255, 255, 0);
            &:checked{
                color: #fff;
  }
            &::before {
                content: "${(props) => props.$text}";
                color: #a9acb4;
                text-transform: uppercase;
 }
 &:checked{
   border-bottom: 2px solid #1ec3a8;
 }
`

export default function RadioButton({ name, $text, onClick, value }) {
    return (
        <>
            <Radio name={name} value={value} onClick={onClick} $text={$text} type="radio" />
        </>
    )
}
