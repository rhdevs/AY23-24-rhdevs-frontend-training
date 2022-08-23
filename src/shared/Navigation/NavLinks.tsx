import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const UnorderedList = styled.ul`
  margin: auto;
  list-style: none;
  margin: 0 1.5rem;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const StyledNavLink = styled(NavLink)`
  color: white;
`

const NavLinks = () => {
  return (
    <UnorderedList>
      <StyledNavLink to={{ pathname: 'https://bit.ly/3kyO87g' }} target="_blank">
        Schedule
      </StyledNavLink>
      <StyledNavLink to={{ pathname: 'https://tinyurl.com/frontend-training-resources' }} target="_blank">
        Resources
      </StyledNavLink>
    </UnorderedList>
  )
}

export default NavLinks
