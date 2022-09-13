import React, { useState } from 'react'

import styled from 'styled-components'
import { Turn as Hamburger } from 'hamburger-react'
import NavLinks from './NavLinks'
import FEWebTitle from '../../components/FEWebTitle'
import Dropdown from 'antd/lib/dropdown/dropdown'
import Menu from 'antd/lib/menu'

const MainHeader = styled.header`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #475056;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
  padding: 0 1rem;
  z-index: 5;
`

const NavLinksContainer = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
`

const HamburgerContainer = styled.div`
  position: absolute;
  right: 0;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

const StyledMenu = styled(Menu as any)`
  margin-right: 0.5rem;
`

const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false)

  // const menu = (
  //   <StyledMenu>
  //     <Menu.Item key={1} onClick={() => setOpen(false)}>
  //       <a target="_blank" rel="noopener noreferrer" href="https://bit.ly/3kyO87g">
  //         Schedule
  //       </a>
  //     </Menu.Item>
  //     <Menu.Item key={2} onClick={() => setOpen(false)}>
  //       <a target="_blank" rel="noopener noreferrer" href="https://tinyurl.com/frontend-learning">
  //         Resources
  //       </a>
  //     </Menu.Item>
  //   </StyledMenu>
  // )
  return (
    <>
      <MainHeader>
        <FEWebTitle />
        <NavLinksContainer>
          <NavLinks />
        </NavLinksContainer>
        {/* <HamburgerContainer>
          <Dropdown
            {...(!isOpen && { visible: isOpen })}
            onVisibleChange={(visible) => setOpen(visible)}
            overlay={menu}
            placement="bottomRight"
            trigger={['click']}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Hamburger color="white" size={21} toggled={isOpen} toggle={setOpen} />
            </div>
          </Dropdown>
        </HamburgerContainer> */}
      </MainHeader>
    </>
  )
}

export default MainNavigation
