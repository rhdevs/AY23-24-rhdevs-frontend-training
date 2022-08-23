import React from 'react'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'
import { PATHS } from '../App'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.15));
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  justify-content: center;
  align-items: center;
  margin: 2.5px;

  :hover,
  :focus {
    transform: scale3d(1.05, 1.05, 1.1);
  }
`

const StyledGroupNumber = styled.text`
  font-size: calc(18px + 1.2vw);
`

const StyledComponentName = styled.text`
  font-size: calc(16px + 0.5vw);
`

const StyledMemberNameGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const BoldText = styled.text`
  font-weight: 500;
`

const StyledNamesText = styled.text`
  padding-left: 5px;
`

type Props = {
  groupNumber: number
  componentName: string
  devs: string
  designers: string
}

const GroupCard = (props: Props) => {
  const history = useHistory()

  return (
    <StyledCard onClick={() => history.push(`${PATHS.GROUP_ROUTE}/${props.groupNumber}`)}>
      <StyledGroupNumber>Group {props.groupNumber}</StyledGroupNumber>
      <StyledComponentName>{props.componentName}</StyledComponentName>
      <StyledMemberNameGroup>
        <BoldText>Devs:</BoldText>
        <StyledNamesText>{props.devs}</StyledNamesText>
      </StyledMemberNameGroup>
      <StyledMemberNameGroup>
        <BoldText>Designers:</BoldText>
        <StyledNamesText>{props.designers}</StyledNamesText>
      </StyledMemberNameGroup>
    </StyledCard>
  )
}

export default GroupCard
