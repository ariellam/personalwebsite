import React, { Component } from 'react'
import styled from 'styled-components'
import GalleryDescription from './galleryDescription';

const GalleryCellContainer = styled.div`
  border: 1px solid black;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Photo = styled.img`
  width: 100%;
  transition: .5s ease;
  margin-bottom: -3px;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  &:hover  {
    opacity: 0.9;
  }
`

class GalleryCell extends Component {
  state = {
    blurOn: false
  };

  blurOn = (blurOn) => {
    this.setState({ blurOn })
  }

  render () {
    return (
      <GalleryCellContainer>
        <Photo src={this.props.data.src}/>
        <GalleryDescription 
          title={this.props.data.title}
          description={this.props.data.description}
          format={this.props.data.format}
        />
      </GalleryCellContainer>
    )
  }
}

export default GalleryCell