import React, { Component } from 'react'
import styled from 'styled-components'
import {Image, Row, Col, Container} from 'react-bootstrap'

const GalleryWrapper = styled.div`
  width: 80vw;
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
  transition: .7s ease;
  
  &:hover  {
    opacity: 0.9;
  }
`

const HoverOverlay = styled.div`
  color: black;
  position: absolute;
  margin-left: 35px;
  padding-right: 35px;
  margin-top: 26px;
  text-align: left;
  height: 100%;
  width: 90%;
  background-color: rgba(255,255,255,0);
  transition: .7s ease;
  &:hover  {
    background-color: rgba(255,255,255,0.9);

  }
`

const DescriptionDivider = styled.div`

`


class PhotoGallery extends Component {

  render () {
    return (
        <Container>
        <Row noGutters={true}>
          <Col sm={8}>
            <Image src="https://i.imgur.com/ur5syqw.jpg" fluid="true"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>Bunch App of the Day Feature</h3>
                <p>
                  Apple App Store assets for Bunch.
                  <br/>
                  Digital, June 2018.
                </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
          <Col sm={4} style={{'padding': 5}}>
            <Image src="https://i.imgur.com/Nn71L2v.png" fluid="true"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>American Beauty</h3>
                  <DescriptionDivider/>
                  <p>
                    Personal work.
                    <br/> Digital, July 2018.
                  </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col sm={4} style={{'padding': 5}}>
            <Image src="src/bunchkids-grid.png" fluid="true"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>Unreleased Game - Concept Art</h3>
                <DescriptionDivider/>
                <p>
                  Character sheets, storyboards, and digital assets created for an upcoming project from Bunch.
                  <br/> Digital, July 2018.
                </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
          <Col sm={8} style={{'padding': 5}}>
            <Image src="src/bunchkids-grid.png" fluid="true"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>Venice</h3>
                <DescriptionDivider/>
                <p>
                  Personal work.
                  <br/> Gouache on watercolour paper, July 2018.
                </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col sm={8} style={{'padding': 5}}>
            <Image src="src/bunchkids-grid.png" fluid="true"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>Thursdaze Character Sprites</h3>
                <DescriptionDivider/>
                <p>
                  Character designs and running sprites for an upcoming iOS game I'm working on. 
                  Stay tuned!
                  <br/> Digital, July 2018.
                </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
          <Col sm={4}>
            <Image src="src/bunchkids-grid.png"/>
            {/* <Overlay>
              <HoverOverlay>
                <h3>Doodle 4 Google</h3>
                <DescriptionDivider/>
                <p>
                  Created for the Doodle 4 Google 2014 contest.
                  <br/> Digital, 2013.
                </p>
              </HoverOverlay>
            </Overlay> */}
          </Col>
        </Row>
        </Container>

    )
  }
}

export default PhotoGallery