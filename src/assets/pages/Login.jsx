import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import Title from '../components/ui/Title'

const LoginWrapper = styled.section`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

const LoginContainer = styled.div`
width: 400px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
padding: 20px;
@media(max-width:700px){
width: 100%;
}
`



export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <LoginWrapper>
        <LoginContainer>
          <Title>Inicia sesión</Title>
          <Input onChange={e => setUser(e.target.value)} placeholder='Usuario' type="Input" />
          <Input onChange={e => setPass(e.target.value)} placeholder='Contraseña' type="Input" />
          <Button isLink={true} to={user === 'admin' && pass === 'admin' && '/productos'}>Iniciar sesión</Button>
        </LoginContainer>
      </LoginWrapper>
    </>
  )
}
