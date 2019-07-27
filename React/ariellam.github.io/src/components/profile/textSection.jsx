import React, { Component } from 'react'
import styled from 'styled-components'
import ContactButtons from './contactButtons';

const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
`
const Name = styled.div`
  font-family: 'Major Mono Display', monospace;
  font-size: 48px;
  text-transform: lowercase;
`

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
          Hi! I'm Ariel, and I'm a Software Engineering student at the University of Waterloo.
          <br/><br/>
          I'm passionate about mobile and front-end development, design, and user experiences.
          <br/><br/>
          Incoming Software Engineering Intern at <a href="https://www.inkling.com/">Inkling</a>. Previously at TribalScale and Bunch Studios.
        </AboutMe>
        <ContactButtons/>
      </TextSectionWrapper>
    )
  }
}

export default TextSection