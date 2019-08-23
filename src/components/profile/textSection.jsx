import React, { Component } from 'react'
import styled from 'styled-components'
import ContactButtons from './contactButtons';

const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
  @media (max-width: 768px) {
    width: 300px;
  }
`
const Name = styled.div`
  font-family: "Work Sans", monospace;
  font-size: 64px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 56px;
  }
`;

const AboutMe = styled.p`
  font-family: 'Inconsolata', monospace;
  font-size: 14px;  
  font-style: normal;
  font-weight: normal;
  line-height: normal; 
`

class TextSection extends Component {
  render () {
    return (
      <TextSectionWrapper>
        <Name>Ariel Lam</Name>
        <AboutMe>
          Hi, I'm Ariel! I'm a 3A Software Engineering student at the University of Waterloo.
          <br/><br/>
          I'm passionate about mobile and front-end development, design, and user experiences.
          <br/><br/>
          On my spare time, I love to draw, <a href="https://open.spotify.com/playlist/3z9DguFEZgpBDgxPqLpu0z?si=06xXF_q4Que3WAvYOaC-sQ">curate pretty awesome playlists</a>, and go to concerts.
        </AboutMe>
        <ContactButtons/>
      </TextSectionWrapper>
    )
  }
}

export default TextSection