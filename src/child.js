import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  background-color: red;
  color: white;
`

const Child = () => {
  return <Title>Child</Title>
}

export default Child
