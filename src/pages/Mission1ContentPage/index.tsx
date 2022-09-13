import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

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

const Link = ({ url }: { url: string }) => {
  const processURL = (link: string) => {
    if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) return link
    return `https://${link}`
  }

  return (
    <a href={processURL(url)} target="_blank" rel="noreferrer">
      {url}
    </a>
  )
}

const Mission1ContentPage = () => {
  const params = useParams<{ name: string; submissionLink: string }>()
  return (
    <>
      <MembersSection>
        <MissionsHeader>Mission 1 - TypeScript Exercise</MissionsHeader>
        <p>Translate a JS code to TS according to instructions given</p>
        <h2>Submission By: {params.name}</h2>
        <h3>
          Link: <Link url={params.submissionLink} />
        </h3>
        <InformationCardSection></InformationCardSection>
      </MembersSection>
    </>
  )
}

export default Mission1ContentPage
