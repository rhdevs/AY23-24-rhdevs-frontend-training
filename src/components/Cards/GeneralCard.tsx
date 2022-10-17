import React from 'react'
import { useHistory } from 'react-router-dom'

import { StyledCard, StyledComponentName } from './index.styled'

type Props = {
  path: string
  componentName: string
}

const GeneralCard = (props: Props) => {
  const history = useHistory()

  return (
    <StyledCard onClick={() => history.push(props.path)}>
      <StyledComponentName>{props.componentName}</StyledComponentName>
    </StyledCard>
  )
}

export default GeneralCard
