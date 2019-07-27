import React, { Component } from 'react'
import styled from 'styled-components'
import StackGrid from 'react-stack-grid'
import photos from './photos'
import GalleryCell from './galleryCell'
const GalleryWrapper = styled.div`
  padding-top: 10vh;
  width: 90vw;
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


class PhotoGallery extends Component {
  renderGalleryCells = () => {
    const imageNames = ['christine-valentine','bunch-kids', 'vodka-cran', 'american-beauty', 'thursdaze', 'catfight', 'google-doodle']
    var projectArray = []
    for(var i = 0; i < imageNames.length; i++) {
      const image = photos[imageNames[i]]
      projectArray.push(
        <GalleryCell
          data={image}
          key={image.key}
        />
      )
    }
    return projectArray
  }

  render () {
    return (
      <>
        <GalleryWrapper id='gallery'>         
          <SectionHeader >art</SectionHeader>
          <StackGrid columnWidth={400}>
            {this.renderGalleryCells()}
          </StackGrid>
        </GalleryWrapper>
      </>
    )
  }
}

export default PhotoGallery