import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

const ProjectButton = styled.a`
  width: 70px;
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 14px;
  font-family: 'Inconsolata', monospace;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
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