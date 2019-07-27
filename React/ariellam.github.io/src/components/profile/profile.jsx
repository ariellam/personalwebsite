import React, { Component } from 'react'
import styled from 'styled-components'
import ProfilePicture from './profilePicture'
import TextSection from './textSection'
import MediaQuery from 'react-responsive'

const ProfileWrapperDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const ProfileWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


class Profile extends Component {
  // isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  // isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  // isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  // isPortrait = useMediaQuery({ orientation: 'portrait' })
  // isRetina = useMediaQuery({ minResolution: '2dppx' })
  render () {
    return (
      <>
          <ProfileWrapperDesktop>
            <TextSection/>
            <ProfilePicture/>
          </ProfileWrapperDesktop>
          <ProfileWrapperMobile>
            <ProfilePicture/>
            <TextSection/>
          </ProfileWrapperMobile>
      </>
    )
  }
}

export default Profile