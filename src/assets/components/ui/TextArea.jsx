import React from 'react'
import styled from 'styled-components'


const TextAreaStyle = styled.textarea`
border: 0px;
font-size: 17px;
border-bottom: 3px solid #d6a400;
background-color: #555;
border-radius: 4px;
width: 100%;
color: #fff;
padding: 10px 15px;
resize: none;
&::placeholder{
  color: #d7d7d7;
}
`
export default function TextArea({ value, placeholder, name, id, cols, rows, children }) {
    return (
        <TextAreaStyle value={value} placeholder={placeholder} name={name} id={id} cols={cols} rows={rows}>
            {children}
        </TextAreaStyle>
    )
}
