import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import FEWebTitle from '../../components/FEWebTitle'

const MainFooter = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 3rem 1rem 4rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0;
    height: fit-content;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledNavLink = styled(NavLink)`
  color: white;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`

const Styledhr = styled.hr`
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 1px;

  @media (max-width: 768px) {
    display: none;
  }
`

const Footer = () => {
  return (
    <MainFooter>
      <LinksContainer>
        <StyledNavLink to={{ pathname: 'https://www.rhapp.lol' }} target="_blank">
          RHapp
        </StyledNavLink>
        <StyledNavLink
          to={{
            pathname: 'https://github.com/rhdevs/rhdevs-frontend-training-AY2122',
          }}
          target="_blank"
        >
          Github
        </StyledNavLink>
        <LogoContainer>
          <FEWebTitle imgSize="1.5rem" fontSize="17px" />
        </LogoContainer>
        <StyledNavLink to={{ pathname: 'https://t.me/fanghuihui' }} target="_blank">
          Help desk
        </StyledNavLink>
        <StyledNavLink to={{ pathname: 'https://rhdevs.github.io/landing-page/' }} target="_blank">
          Blog
        </StyledNavLink>
      </LinksContainer>
      <Styledhr />
    </MainFooter>
  )
}

export default Footer
