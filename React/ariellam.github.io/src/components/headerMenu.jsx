import React, { Component } from 'react'
import HeaderSection from './headerSection'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MenuWrapper = styled.div`
  top: 0px;
  position: fixed;
  display: flex;
  flex-direction: row;
  text-transform: lowercase;
  justify-content: flex-start;
  width: 100vw;
  height: 60px;
  background-image: linear-gradient(white , rgba(0,0,0,0));
`

class HeaderMenu extends Component {
  render () {
    return (
      <MenuWrapper>
        <HeaderSection text='Home'/>
        <HeaderSection text='Projects'/>
        <HeaderSection text='Art'/>
        <HeaderSection text='Design'/>
      </MenuWrapper>
    )
  }
}

export default HeaderMenu