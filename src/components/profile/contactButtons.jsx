import React, { Component } from 'react'
import styled from 'styled-components'
import {
  FaRegFileAlt,
  FaGithub,
  FaTwitter,
  FaSpotify,
  FaLinkedinIn,
} from "react-icons/fa";
import ReactTooltip from 'react-tooltip'

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    padding-top: 20px;
  }
`

const ContactButton = styled.a`
  font-size: 14px;
  font-family: 'Work Sans', monospace;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid black;
`

class ContactButtons extends Component {
  render () {
    return (
      <ContactButtonsWrapper>
        <ReactTooltip
          class='tooltipClass'
          place='bottom'
          // offset={{'right': '25%'}}
          effect='solid'
        />
        <ContactButton
          data-tip="Resume"
          target="_blank"
          href="https://drive.google.com/open?id=1K3hLW0My1jtWj3MQvE3bQ3c5sAbE3szC"
        >
          <FaRegFileAlt />
        </ContactButton>
        <ContactButton
          data-tip="Github"
          target="_blank" 
          href="https://github.com/ariellam"
        >
          <FaGithub />
        </ContactButton>
        <ContactButton
          data-tip="Linkedin"
          target="_blank"
          href="https://www.linkedin.com/in/arielclam/"
        >
          <FaLinkedinIn />
        </ContactButton>
        <ContactButton
          data-tip="Spotify"
          target="_blank"
          href="https://open.spotify.com/user/fluxue?si=Y6UJAo5yTViKvVGoyhnTXw"
        >
          <FaSpotify />
        </ContactButton>
      </ContactButtonsWrapper>
    );
  }
}

export default ContactButtons
