import React, { Component } from 'react'
import styled from 'styled-components'
import HolidayURL from '../../assets/profile-holiday.jpg'
import GlossierURL from '../../assets/profile_glossier.jpg'
import BeachURL from '../../assets/profile_beach.jpg'
import TwinPeaksURL from '../../assets/profile_twinpeaks.jpg'

import {AiOutlineCloseSquare, AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineLeftSquare, AiOutlineRightSquare} from "react-icons/ai";

const PicContainer = styled.div`
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`
const BrowserBar = styled.div`
  height: 14px;
  width: 280px;
  display: flex;
  border: 1px solid black;
  border-bottom: 0px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 320px;
  }
`
const IconContainer = styled.div`
  height: 13px;
`
const Picture = styled.img`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 280px;
  height: 280px;
  padding: 1px;
  border: 1px solid black;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  &:hover {
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
  }
  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

class ProfilePicture extends Component {
  pictures = [HolidayURL, GlossierURL, BeachURL, TwinPeaksURL];
  constructor(props) {
    super(props);
    let newNumber = Math.floor(Math.random() * 4);
    this.state = {
      pictureIndex: newNumber,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);

  }

  handleRightClick() {
    if (this.state.pictureIndex === this.pictures.length - 1) {
      this.setState({pictureIndex: 0});
    } else {
      this.setState(state => ({
        pictureIndex: state.pictureIndex + 1
      }));
    }
  }

  handleLeftClick() {
    if (this.state.pictureIndex === 0) {
      this.setState({pictureIndex: this.pictures.length - 1});
    } else {
      this.setState(state => ({
        pictureIndex: state.pictureIndex - 1
      }));
    }
  }

  render () {
    return (
      <PicContainer>
        <BrowserBar>
          <IconContainer>
            <AiOutlineCloseSquare size={13} color={'black'}/>
            <AiOutlinePlusSquare size={13} color={'black'}/>
            <AiOutlineMinusSquare size={13} color={'black'}/>
          </IconContainer>
          <IconContainer>
            <AiOutlineLeftSquare size={13} color={'black'} onClick={(e) => this.handleLeftClick()}/>
            <AiOutlineRightSquare size={13} color={'black'} onClick={(e) => this.handleRightClick()}/>
          </IconContainer>
        </BrowserBar>
        <Picture src={this.pictures[this.state.pictureIndex]} />
      </PicContainer>
    )
  }
}

export default ProfilePicture