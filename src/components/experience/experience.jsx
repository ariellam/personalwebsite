import React, { Component } from 'react'
import styled from 'styled-components'
import ExperienceCell from './experienceCell'
import ExperienceData from './experienceData'
import SectionTitle from '../sectionTitle'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

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
        <VerticalTimeline>
          {this.renderExperienceCells()}
        </VerticalTimeline>
      </SectionWrapper>
    )
  }
}

export default Experience