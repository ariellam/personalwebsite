import React, { Component } from 'react'
import styled from 'styled-components'
import GalleryDescription from './galleryDescription';

const GalleryCellContainer = styled.div`
  overflow: hidden;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Photo = styled.img`
  width: 100%;
  transition: .5s ease;
  filter: blur(${props => props.blurOn ? "4px" : "0"});
  transform: ${props => props.blurOn ? "scale(1.01)" : "scale(1)"};
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
  state = {
    blurOn: false
  };

  blurOn = (blurOn) => {
    this.setState({ blurOn })
  }

  render () {
    return (
      <GalleryCellContainer>
        <Photo src={this.props.data.src} blurOn={this.state.blurOn}/>
        <Overlay
          onMouseEnter={ () => this.blurOn(true) }
          onMouseLeave={ () => this.blurOn(false) }>
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