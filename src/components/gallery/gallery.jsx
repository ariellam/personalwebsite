import React, { Component } from 'react'
import styled from 'styled-components'
import StackGrid from 'react-stack-grid'
import photos from './photos'
import GalleryCell from './galleryCell'
import SectionTitle from '../sectionTitle';

const GalleryWrapper = styled.div`
  width: 90vw;
  @media (max-width: 768px) {
    width: 400px;
  }
`;

class Gallery extends Component {
  renderGalleryCells = () => {
    const imageNames = ['elle', 'big-draw', 'lust-for-life', 'christine-valentine', 'bunch-kids', 'vodka-cran', 'thursdaze', 'cold-as-ice', 'google-doodle',]
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
        <GalleryWrapper id="gallery">
          <SectionTitle title="Art" />
          <StackGrid
            columnWidth={380}
            monitorImagesLoaded={true}
            appearDelay
          >
            {this.renderGalleryCells()}
          </StackGrid>
        </GalleryWrapper>
      </>
    );
  }
}

export default Gallery