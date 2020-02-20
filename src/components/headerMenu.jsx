import React, { Component } from 'react'
import HeaderSection from './headerSection'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  top: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100vw;
  height: 60px;
  background-color: white;
  z-index: 1000;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

class HeaderMenu extends Component {
  render () {
    return (
      <MenuWrapper>
        <HeaderSection text='Home' header="#home"/>
        <HeaderSection text='Projects' header="#projects"/>
        {/* <HeaderSection text='Experience' header="#experience" /> */}
        <HeaderSection text='Art' header="#gallery"/>
        {/* <HeaderSection text='About' header="#about"/> */}
        {/* <HeaderSection text='Design' header="#design"/> */}
      </MenuWrapper>
    )
  }
}

export default HeaderMenu