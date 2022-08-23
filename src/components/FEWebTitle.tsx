import React from 'react'
import { useHistory } from 'react-router'

import styled from 'styled-components'
import frontendIcon from '../assets/frontend-logo.jpeg'

const FEContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 10px;
  cursor: pointer;
`

const TitleText = styled.h2<{ fontSize?: string }>`
  margin: 0;
  color: white;
  white-space: nowrap;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`

const StyledIcon = styled.img<{ imgSize?: string }>`
  height: ${(props) => props.imgSize ?? '2rem'};
  width: ${(props) => props.imgSize ?? '2rem'};
`

type Props = {
  fontSize?: string
  imgSize?: string
}

const FEWebTitle = (props: Props) => {
  const history = useHistory()
  return (
    <FEContainer onClick={() => history.push('/')}>
      <StyledIcon imgSize={props.imgSize} src={frontendIcon} alt="Frontend Icon" />
      <TitleText fontSize={props.fontSize}>Frontend 21/22!</TitleText>
    </FEContainer>
  )
}

export default FEWebTitle
