import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderImageURL from '../../assets/lift-grid.png'

const ProjectCellContainer = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid rgba(0,0,0,0.5);
`

const HeaderImage = styled.img`
  width: 100%;
`

const ProjectTitle = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 24px;  
  font-style: bold;
  padding: 10px;
`

const ProjectText = styled.div`
  color: black;
  padding: 10px;

`

const ProjectLinks = styled.div``

class ProjectCell extends Component {
  render () {
    return (
      <ProjectCellContainer>
        <HeaderImage src={this.props.image}/>
        <ProjectTitle>{this.props.title}</ProjectTitle>
        <ProjectText>
          {this.props.description}
        </ProjectText>
        <ProjectLinks/>
      </ProjectCellContainer>
    )
  }
}

export default ProjectCell