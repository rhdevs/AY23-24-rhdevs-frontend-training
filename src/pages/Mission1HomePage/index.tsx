import React from 'react'
import styled from 'styled-components'
import Mission1NameCard from '../../components/Mission1NameCard'

// Do not edit the other parts of the code!

const MembersSection = styled.div`
  margin: 1.5rem 1rem;
`

const MissionsHeader = styled.h1`
  text-align: center;
  font-weight: 600;
`

const StyledDescription = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InformationCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 200px;
  grid-gap: 1rem;
  justify-content: space-evenly;
  padding: 10px 0;
`

const Mission1Page = () => {
  return (
    <>
      <MembersSection>
        <MissionsHeader>Mission 1 - Shopping Lists</MissionsHeader>
        <StyledDescription>
          <h3>Create a shopping list that have the following functions:</h3>
          <ol>
            <li>Add item to list</li>
            <li>Remove item from list</li>
            <li>(Bonus) Add a &apos;quantity&apos; field for each item that you can increment/decrement</li>
          </ol>
          <span>
            Figma link:&nbsp;
            <a href="https://www.figma.com/file/arMvxn1zopKqB1m8bTh71Q/Shopping-Lists" target="_blank" rel="noreferrer">
              https://www.figma.com/file/arMvxn1zopKqB1m8bTh71Q/Shopping-Lists
            </a>
          </span>
        </StyledDescription>
        <StyledDescription>Create a card here with your name to link to your submission!</StyledDescription>
        <InformationCardSection>
          <Mission1NameCard name="Example" />
          <Mission1NameCard name="VikramGoyal" />
          <Mission1NameCard name="Example_redux" />
          {/* Add your Name Card here! */}
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default Mission1Page
