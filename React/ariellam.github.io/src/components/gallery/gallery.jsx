import React, { Component } from 'react'
import styled from 'styled-components'
import StackGrid from 'react-stack-grid'
import photos from './photos'
import GalleryCell from './galleryCell'
import SectionTitle from '../sectionTitle';

const GalleryWrapper = styled.div`
  padding-top: 10vh;
  width: 90vw;
`

class Gallery extends Component {
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
          <SectionTitle title='art'/>
          <StackGrid columnWidth={400}>
            {this.renderGalleryCells()}
          </StackGrid>
        </GalleryWrapper>
      </>
    )
  }
}

export default Gallery