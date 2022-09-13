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
        <StyledNavLink
          to={{
            pathname: 'https://github.com/rhdevs/AY22-23-rhdevs-frontend-training',
          }}
          target="_blank"
        >
          Github Repo😸
        </StyledNavLink>
        <StyledNavLink to={{ pathname: 'https://t.me/marcus_ong_qy' }} target="_blank">
          Help desk📲
        </StyledNavLink>
        <LogoContainer>
          <FEWebTitle imgSize="1.5rem" fontSize="17px" />
        </LogoContainer>
        <StyledNavLink
          to={{ pathname: 'https://www.notion.so/rhdevs-wiki/RHDevs-Members-Notion-dbbbc919561649629325f7d72d0a5d35' }}
          target="_blank"
        >
          Members&apos; Notion📘
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
      </LinksContainer>
      <Styledhr />
    </MainFooter>
  )
}

export default Footer
