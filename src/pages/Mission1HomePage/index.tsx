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
        <MissionsHeader>Mission 1 - TypeScript Exercise</MissionsHeader>
        <StyledDescription>
          Translate a JS code to TS according to instructions given. Access and submit the assignment file from
          the&nbsp;
          <a href="https://github.com/rhdevs/fe-training-mission-1-submission-AY22-23" target="_blank" rel="noreferrer">
            submission repo
          </a>
          .
        </StyledDescription>
        <StyledDescription>
          After submitting your assignment, create a card here to link to your submission!
        </StyledDescription>
        <InformationCardSection>
          <Mission1NameCard
            name="(example) your name here"
            submissionLink="github.com/rhdevs/fe-training-mission-1-submission-AY22-23/blob/main/submission-folder/example.ts"
          />
          {/* Add your Name Card here! */}
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default Mission1Page
