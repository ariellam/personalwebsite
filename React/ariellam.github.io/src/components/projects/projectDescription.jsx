import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;

`

const ProjectTitle = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 24px;  
  font-style: bold;
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