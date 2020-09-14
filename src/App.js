import React from 'react'
import styled from 'styled-components'

import Title from './components/title'
import Button from './components/button'
import Paragraph from './components/paragraph'

const StyledContainer = styled.div`
  text-align: center;
`

const App = () => {
  return (
    <StyledContainer>
      <Title title='styled-components' />
      <Button content='My Button' variant='contained' />
      <Paragraph content='hello' />
    </StyledContainer>
  )
}

export default App
