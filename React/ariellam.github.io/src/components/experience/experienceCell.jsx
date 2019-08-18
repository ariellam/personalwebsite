import React, { Component } from 'react'
import styled from 'styled-components'

const ExpCellContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Company = styled.div`
  color: black;
  font-family: "Work Sans", monospace;
  font-size: 18pt;
  margin: 20px;
`

// const Line = styled.div`
//   width: 40vw;
//   height: 1px;
//   background-color: rgba(0,0,0,0.3);
//   margin: 20px;
//   margin-left: 5px;
//   margin-top: 25px;
// `

const Dates = styled.div`
  color: rgba(0,0,0,0.3);
  font-family: "Inconsolata", monospace;
  font-size: 18pt;
  margin: 20px;
`


class ExperienceCell extends Component {
  render () {
    return (
      <ExpCellContainer>
        <Header>
          <Company>{this.props.data.company}</Company>
          {/* <Line/> */}
          <Dates>{this.props.data.dates}</Dates>
        </Header>
      </ExpCellContainer>
    )
  }
}

export default ExperienceCell