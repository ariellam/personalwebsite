import React, { Component } from 'react'
import styled from 'styled-components'
import ContactButtons from './contactButtons';

const TextSectionWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 360px;
  margin-left: 50px;
  @media (max-width: 768px) {
    align-items: center;
    width: 295px;
    margin: 0px;
  }
`
const Name = styled.div`
  font-family: "Work Sans", monospace;
  font-size: 64px;
  font-weight: 600;
  height: 70px;
  @media (max-width: 768px) {
    font-size: 58px;
    width: 300px;
    padding-top: 20px;
    text-align: center;
  }
`;

const AboutMe = styled.p`
  font-family: 'Inconsolata', monospace;
  font-size: 14px;  
  font-style: normal;
  font-weight: normal;
  line-height: normal; 
`

const Link = styled.a`
  font-family: 'Inconsolata', monospace;
  font-size: 14px; 
  text-decoration: underline;
  color: #ED6E58;
  font-weight: 500;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  &:hover{
    color: #9A2027;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out; 
  }
`

class TextSection extends Component {
  render () {
    return (
      <TextSectionWrapper>
        <Name>Ariel Lam</Name>
        <AboutMe>
          Hi, I'm Ariel! I'm a third year Software Engineering student at the University of Waterloo. I'm passionate about mobile and front-end development, design, and user experiences.
          <br/><br/>
          Previously, I've worked at , <Link href="https://www.inkling.com/">Inkling</Link>, <Link href="https://bunch.live/">Bunch</Link>, <Link href="https://www.tribalscale.com/">TribalScale</Link>,  and <Link href="https://www.rbcroyalbank.com/personal.html">RBC</Link>.
          <br/><br/>
          On my spare time, I love to draw, listen to music, advocate for women in tech, spend hours in art museums, and collect pins.
        </AboutMe>
        <ContactButtons/>
      </TextSectionWrapper>
    )
  }
}

export default TextSection