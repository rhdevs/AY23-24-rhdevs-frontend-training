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
      <StyledNavLink
        to={{ pathname: 'https://drive.google.com/file/d/1DUjrO31B2I16dwV8rev-_WQ6HrW9IZpn/view?usp=sharing' }}
        target="_blank"
      >
        Training Schedule📅
      </StyledNavLink>
      <StyledNavLink
        to={{
          pathname: 'https://github.com/rhdevs/AY23-24-rhdevs-frontend-training',
        }}
        target="_blank"
      >
        Github Repo😸
      </StyledNavLink>
      <StyledNavLink
        to={{
          pathname:
            'https://www.notion.so/heads-of-rhdevs/WIP-RHDevs-Frontend-Code-Style-Guide-b5f294c047f14f78b370031afb2c73c5',
        }}
        target="_blank"
      >
        Code Style Guide💅
      </StyledNavLink>
    </UnorderedList>
  )
}

export default NavLinks
