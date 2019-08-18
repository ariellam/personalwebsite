import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

const ProjectButton = styled.a`
  font-size: 14px;
  font-family: 'Work Sans', monospace;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

class ProjectButtons extends Component {
  render () {
    return (
      <ProjectButtonsWrapper>
        {this.props.github ? <ProjectButton href={this.props.github}>Github</ProjectButton> : null}
        {this.props.devpost ? <ProjectButton href={this.props.devpost}>Devpost</ProjectButton> : null}
      </ProjectButtonsWrapper>
    )
  }
}

export default ProjectButtons