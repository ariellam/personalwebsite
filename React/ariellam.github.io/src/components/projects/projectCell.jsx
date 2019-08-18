import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectButtons from './projectButtons';
import ProjectDescription from './projectDescription'

const ProjectCellContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectDetails = styled.div`
  height: 150px;
  border: 1px solid rgba(0,0,0,0.1);
  border-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
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