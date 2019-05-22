import React, { Component } from 'react'
import styled from 'styled-components'
import PictureURL from '../../assets/newpic.png'

const Picture = styled.img.attrs({
    src: PictureURL
  })`
  width: 250px;
  height: 250px;
  margin: 20px;
  box-shadow: 7px 7px 0px lightblue;
`

class ProfilePicture extends Component {
  render () {
    return (
      <Picture/>
    )
  }
}

export default ProfilePicture