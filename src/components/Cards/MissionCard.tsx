import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { PATHS } from '../../App'
import { StyledCard, StyledComponentName } from './index.styled'

const StyledGroupNumber = styled.text`
  font-size: calc(18px + 1.2vw);
`

type Props = {
  groupNumber: number
  componentName: string
}

const MissionCard = (props: Props) => {
  const history = useHistory()

  return (
    <StyledCard onClick={() => history.push(`${PATHS.MISSIONS}/${props.groupNumber}`)}>
      <StyledGroupNumber>Mission {props.groupNumber}</StyledGroupNumber>
      <StyledComponentName>{props.componentName}</StyledComponentName>
    </StyledCard>
  )
}

export default MissionCard
