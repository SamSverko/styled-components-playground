import React from 'react'
import styled from 'styled-components'
import MUIButton from '@material-ui/core/Button'

const StyledButton = styled(MUIButton)`
  && {
    background-color: purple;
    color: white;
  }
`

const Button = ({ content }) => {
  return <StyledButton>{content}</StyledButton>
}

export default Button
