import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProjectTitle = styled.div`
  font-family: 'Work Sans', monospace;
  font-size: 24px;  
  font-style: bold;
  font-weight: 600;
`

const ProjectText = styled.div`
  color: black;
  padding-top: 15px;
`


class ProjectDescription extends Component {
  render () {
    return (
      <ProjectDescriptionContainer>
        <ProjectTitle>{this.props.title}</ProjectTitle>
        <ProjectText>
          {this.props.description}
        </ProjectText>
      </ProjectDescriptionContainer>
    )
  }
}

export default ProjectDescription