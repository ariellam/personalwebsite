import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectCell from './projectCell'
import ProjectsData from './projectsData'
import SectionTitle from '../sectionTitle'
import StackGrid from 'react-stack-grid'

const SectionWrapper = styled.div`
  padding-top: 10vh;
  display: flex; 
  flex-direction: column;
  width: 90vw;
`

class Projects extends Component {
  renderProjectCells = () => {
    const projectNames = ['lift', 'describe', 'givingtree']
    var projectArray = []
    for(var i = 0; i < projectNames.length; i++) {
      const project = ProjectsData[projectNames[i]]
      projectArray.push(
        <ProjectCell
          project={project}
        />
      )
    }
    return projectArray
  }
  render () {
    return (
      <SectionWrapper id='projects'>
        <SectionTitle title='projects'/>
          <StackGrid columnWidth={400}>
            {this.renderProjectCells()}
          </StackGrid>
      </SectionWrapper>
    )
  }
}

export default Projects