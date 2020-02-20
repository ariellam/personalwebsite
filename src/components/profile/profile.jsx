import React, { Component } from 'react'
import styled from 'styled-components'
import ProfilePicture from './profilePicture'
import TextSection from './textSection'

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 50px;
  }
`

class Profile extends Component {
  render () {
    return (
      <>
          <ProfileWrapper id='home'>
            <ProfilePicture />
            <TextSection/>
          </ProfileWrapper>
      </>
    )
  }
}

export default Profile