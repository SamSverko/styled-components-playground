import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  background-color: 'red';
  color: 'white';
  text-transform: uppercase;
  &:hover {
    background-color: black;
  }
`

const Title = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>
}

export default Title
