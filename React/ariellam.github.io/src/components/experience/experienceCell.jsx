import React, { Component } from 'react'
import styled from 'styled-components'

const ExpCellContainer = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`

const Company = styled.div`
  color: black;
  font-family: "Work Sans", monospace;
  font-size: 18pt;
  margin-left: 20px;
`

const Position = styled.div`
  font-size: 12pt;
  font-family: "Work Sans", monospace;
  color: grey;
`

const Line = styled.div`
  width: 20vw;
  height: 1px;
  background-color: rgba(0,0,0,0.3);
  margin: 20px;
  margin-left: 5px;
  margin-top: 25px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
`

const Dates = styled.div`
  color: rgba(0,0,0,0.3);
  font-family: "Work Sans", monospace;
  font-size: 16pt;
  margin-left: 20px;
  margin-top: 10px;
  width: 200px;
`
const Description = styled.div`
`

class ExperienceCell extends Component {
  render () {
    return (
      <ExpCellContainer>
        <Header>
          <Company>{this.props.data.company}</Company>
          <Dates>{this.props.data.dates}</Dates>
        </Header>
        <Body>
          <Position>{this.props.data.position}</Position>
          <Description>{this.props.data.description}</Description>
        </Body>
      </ExpCellContainer>
    )
  }
}

export default ExperienceCell