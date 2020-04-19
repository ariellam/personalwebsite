import React, { Component } from 'react'
import styled from 'styled-components'

const ProjectDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-top: solid 1px black;
`

const ArtTitle = styled.div`
  font-family: 'Work Sans', monospace;
  font-size: 24px;  
  font-weight: 600;
`

const ArtDescription = styled.div`
  color: black;
`

const ArtFormat = styled.div`
  font-style: italic;
`

const DescriptionDivider = styled.div`
  height: 1px;
  width: 90%;
  background-color: black;
  margin-top: 7px;
  margin-bottom: 15px;
`

class GalleryDescription extends Component {
  render () {
    return (
      <ProjectDescriptionContainer>
        {/* {this.props.title && <ArtTitle>{this.props.title}</ArtTitle>} */}
        {/* {this.props.title && <DescriptionDivider/>} */}
        <ArtDescription>
          {this.props.description}
        </ArtDescription>
          {this.props.description && <br/>}
        <ArtFormat>
          {this.props.format}
        </ArtFormat>
      </ProjectDescriptionContainer>
    )
  }
}

export default GalleryDescription