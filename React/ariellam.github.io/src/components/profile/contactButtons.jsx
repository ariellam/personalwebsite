import React, { Component } from 'react'
import styled from 'styled-components'

const ContactButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
`

const ContactButton = styled.a`
  width: 70px;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-family: 'Inconsolata', monospace;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`

class ContactButtons extends Component {
  render () {
    return (
      <ContactButtonsWrapper>
        <ContactButton href="">Resume</ContactButton>
        <ContactButton href="https://github.com/ariellam">Github</ContactButton>
        <ContactButton href="https://www.linkedin.com/in/arielclam/">LinkedIn</ContactButton>
      </ContactButtonsWrapper>
    )
  }
}

export default ContactButtons