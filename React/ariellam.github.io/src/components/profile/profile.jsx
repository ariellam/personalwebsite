import React, { Component } from 'react'
import styled from 'styled-components'
import ProfilePicture from './profilePicture'
import TextSection from './textSection'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
class Profile extends Component {
  render () {
    return (
      <ProfileWrapper>
        <TextSection/>
        <ProfilePicture/>
      </ProfileWrapper>
    )
  }
}

export default Profile