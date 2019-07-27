import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectButtons from './projectButtons';
import ProjectDescription from './projectDescription'

const ProjectCellContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
`

const ProjectDetails = styled.div`
  height: 200px;
  border: 1px solid rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HeaderImage = styled.img`
  width: 100%;
`

class ProjectCell extends Component {
  render () {
    return (
      <ProjectCellContainer>
        <HeaderImage src={this.props.project.image}/>
        <ProjectDetails>
          <ProjectDescription title={this.props.project.title} description={this.props.project.description}/>
          <ProjectButtons github={this.props.project.github} devpost={this.props.project.devpost}/>
        </ProjectDetails>
      </ProjectCellContainer>
    )
  }
}

export default ProjectCell