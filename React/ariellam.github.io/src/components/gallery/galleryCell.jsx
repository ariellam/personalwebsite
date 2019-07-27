import React, { Component } from 'react'
import styled from 'styled-components'
import GalleryDescription from './galleryDescription';

const GalleryCellContainer = styled.div`
`

const Photo = styled.img`
  width: 100%;
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

const HoverOverlay = styled.div`
  color: black;
  position: absolute;
  text-align: left;
  height: 100%;
  width: 100%;
  background-color: rgba(255,255,255,0);
  transition: .7s ease;
  &:hover  {
    background-color: rgba(255,255,255,0.9);

  }
`

class GalleryCell extends Component {
  render () {
    return (
      <GalleryCellContainer>
        <Photo src={this.props.data.src}/>
        <Overlay>
          <HoverOverlay>
            <GalleryDescription 
              title={this.props.data.title}
              description={this.props.data.description}
              format={this.props.data.format}
            />
          </HoverOverlay>
        </Overlay>

      </GalleryCellContainer>
    )
  }
}

export default GalleryCell