import React, { Component } from 'react'
import styled from 'styled-components'
import ContactButtons from './contactButtons';

const TextSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 360px;
  margin-left: 50px;
  @media (max-width: 768px) {
    align-items: center;
    width: 320px;
    margin: 0px;
  }
`
const Name = styled.div`
  font-family: "Work Sans", monospace;
  font-size: 64px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 58px;
    width: 300px;
    margin-top: 20px;
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
          Hi, I'm Ariel! I'm a 3A Software Engineering student at the University of Waterloo. I'm passionate about mobile and front-end development, design, and user experiences.
          <br/><br/>
          I'm an incoming Software Engineering Intern at Apple; previously, I've interned at <Link href="https://www.inkling.com/">Inkling</Link>, <Link href="https://bunch.live/">Bunch</Link>, <Link href="https://www.tribalscale.com/">TribalScale</Link>,  and <Link href="https://www.rbcroyalbank.com/personal.html">RBC</Link>.
          <br/><br/>
          On my spare time, I love to draw, <Link href="https://open.spotify.com/playlist/3z9DguFEZgpBDgxPqLpu0z?si=06xXF_q4Que3WAvYOaC-sQ">curate playlists</Link>, go to concerts, attend tech conferences, spend hours in art museums, and collect (<Link href="https://www.etsy.com/ca/listing/586854300/software-pin">and make!</Link>) pins.
        </AboutMe>
        <ContactButtons/>
      </TextSectionWrapper>
    )
  }
}

export default TextSection