import React, { Component } from 'react'
import styled from 'styled-components'
import twitter from '../../assets/twitter-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import mail from '../../assets/mail-icon.png'

const Icon = styled.img`
  height: 20px;
  margin-right: 10px;
`

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
`

class ContactButtons extends Component {
  render () {
    return (
      <ContactButtonsWrapper>
        <ContactButton href="">Resume</ContactButton>
        <ContactButton href="https://github.com/ariellam">Github</ContactButton>
        <ContactButton href="https://www.linkedin.com/in/arielclam/">LinkedIn</ContactButton>
        <Icon src={twitter} alt="Twitter" />
        <Icon src={mail} alt="Email" />
        <Icon src={linkedin} alt="Linkedin" />

      </ContactButtonsWrapper>
    )
  }
}

export default ContactButtons