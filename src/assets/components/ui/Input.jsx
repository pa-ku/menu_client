import React from 'react'
import styled from 'styled-components'


const InputStyle = styled.input`
border: 0px;
font-size: 17px;
border-bottom: 3px solid #d6a400;
background-color: #555;
border-radius: 4px;
width: 100%;
color: #fff;
padding: 10px 15px;
&::placeholder{
  color: #d7d7d7;
}
`

export default function Input({ title,value, placeholder, type, onChange }) {
  return (
    <InputStyle title={title} value={value} onChange={onChange} placeholder={placeholder} type={type} />
  )
}
