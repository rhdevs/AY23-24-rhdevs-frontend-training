import React from 'react'

import styled from 'styled-components'

const MainContainer = styled.div`
  margin: 1rem 2rem;
`

const PlaceholderBox = styled.div`
  width: 100%;
  height: 100%;
  border: dashed 1px #888;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ComponentsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 3vw;
  height: 50vh;
`

const StyledText = styled.p`
  font-size: 18px;
`

// Create something similiar for your group's page
const GroupX = () => {
  return (
    <MainContainer>
      <h1>Group X</h1>
      <StyledText>your name, another name</StyledText>
      <ComponentsContainer>
        <PlaceholderBox>new component</PlaceholderBox>
        <PlaceholderBox>old component</PlaceholderBox>
      </ComponentsContainer>
    </MainContainer>
  )
}

export default GroupX
