import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import NotFound from '../ErrorPage/NotFound'
import Mission1NameCard from '../../components/Mission1NameCard'

// Do not edit the other parts of the code!

const MembersSection = styled.div`
  margin: 1.5rem 1rem;
`

const MissionsHeader = styled.h1`
  text-align: center;
  font-weight: 600;
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
        <p></p>
        <InformationCardSection>
          <Mission1NameCard
            name="your name here"
            submissionLink="github.com/rhdevs/fe-training-mission-1-submission-AY22-23/blob/main/submission-folder/example.ts"
          />
          {/* Add your Name Card here! */}
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default Mission1Page
