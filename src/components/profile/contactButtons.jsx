import React, { Component } from 'react'
import styled from 'styled-components'
import {
  FaRegFileAlt,
  FaGithub,
  FaTwitter,
  FaSpotify,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
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
`

class ContactButtons extends Component {
  render () {
    return (
      <ContactButtonsWrapper>
        <ContactButton
          target="_blank"
          href="https://drive.google.com/open?id=1K3hLW0My1jtWj3MQvE3bQ3c5sAbE3szC"
        >
          <FaRegFileAlt />
        </ContactButton>
        <ContactButton target="_blank" href="https://github.com/ariellam">
          <FaGithub />
        </ContactButton>
        <ContactButton
          target="_blank"
          href="https://www.linkedin.com/in/arielclam/"
        >
          <FaLinkedinIn />
        </ContactButton>
        <ContactButton
          target="_blank"
          href="https://www.twitter.com/aireclair/"
        >
          <FaTwitter />
        </ContactButton>
        <ContactButton
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