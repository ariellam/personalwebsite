import React, { Component } from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d9eaf3;
  height: 150px;
`

const Quote = styled.div`
  text-align: right;
`
const Source = styled.div`
  color: rgba(0,0,0,0.5);
`

class Footer extends Component {
  render () {
    return (
      <FooterWrapper>
        <Quote>
          "I want to build something that makes people fall in love."
          <br/>
          <Source>- Cameron Howe, <i>Halt and Catch Fire</i></Source>
        </Quote>
      </FooterWrapper>
    )
  }
}

export default Footer