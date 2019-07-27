import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
`

const ArtTitle = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 24px;  
  font-style: bold;
`

const ArtDescription = styled.div`
  color: black;
  padding-top: 15px;
`

const DescriptionDivider = styled.div`
  height: 1px;
  width: 90%;
  background-color: black;
  margin-top: 7px;
`

class GalleryDescription extends Component {
  render () {
    return (
      <ProjectDescriptionContainer>
        <ArtTitle>{this.props.title}</ArtTitle>
        <DescriptionDivider/>
        <ArtDescription>
          {this.props.description}
          <br/><br/>
          {this.props.format}
        </ArtDescription>
      </ProjectDescriptionContainer>
    )
  }
}

export default GalleryDescription