import React from 'react'
import styled from 'styled-components'

import MissionCard from '../../components/MissionCard'

import frontendBannerGif from '../../assets/Frontend-Banner.gif'

// Do not edit the other parts of the code!
const FrontendBanner = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`

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

const LandingPage = () => {
  return (
    <>
      <FrontendBanner src={frontendBannerGif} alt="frontend web development" />
      <MembersSection>
        <MissionsHeader>Missions</MissionsHeader>
        <InformationCardSection>
          <MissionCard groupNumber={1} componentName="Shopping Lists" />
        </InformationCardSection>
      </MembersSection>
    </>
  )
}

export default LandingPage
