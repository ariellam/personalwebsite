import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectCell from './projectCell'
import ProjectsData from './projectsData'

const SectionWrapper = styled.div`
  padding-top: 10vh;
  display: flex; 
  flex-direction: column;
  width: 90vw;

`
const ProjectCellsContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`

const SectionHeader = styled.div`
  font-family: Major Mono Display;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
  text-shadow: 2px 2px 0px #FFB800;
  margin: 2vw;
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
        <SectionHeader>projects</SectionHeader>
        <ProjectCellsContainer>
          {this.renderProjectCells()}
        </ProjectCellsContainer>
      </SectionWrapper>
    )
  }
}

export default Projects