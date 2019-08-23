import React, { Component } from 'react'
import styled from 'styled-components'
import ExperienceCell from './experienceCell'
import ExperienceData from './experienceData'
import SectionTitle from '../sectionTitle'

const SectionWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  width: 90vw;
`

const CellsWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
`

class Experience extends Component {
  renderExperienceCells = () => {
    const companyNames = ['inkling', 'tribalscale', 'bunch', 'rbc']
    var projectArray = []
    for(var i = 0; i < companyNames.length; i++) {
      const exp = ExperienceData[companyNames[i]]
      projectArray.push(
        <ExperienceCell
          data={exp}
          key={exp.key}
        />
      )
    }
    return projectArray
  }
  render () {
    return (
      <SectionWrapper id='experience'>
        <SectionTitle title='experience'/>
        <CellsWrapper>
          {this.renderExperienceCells()}
        </CellsWrapper>
      </SectionWrapper>
    )
  }
}

export default Experience