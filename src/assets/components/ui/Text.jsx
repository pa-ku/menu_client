import React from 'react'
import styled from 'styled-components'

const TextStyle = styled.p`
  color: #fff;
${props => props.$description && 'color: #cccccc; margin-left: 10px;'};
${props => props.$price && 'color: #ffd756; padding-left: 1em;'}
`

export default function Text({ $description, $price, children }) {
    return (
        <TextStyle $description={$description} $price={$price}>{children}</TextStyle>
    )
}
