import React, { Component } from 'react'
import styled from 'styled-components'
import PictureURL from '../../assets/profile-holiday.jpg'
import {AiOutlineCloseSquare, AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineLeftSquare, AiOutlineRightSquare} from "react-icons/ai";

const PicContainer = styled.div`
  margin-top: 20px;
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
`
const IconContainer = styled.div`
  height: 13px;
`
const Picture = styled.img.attrs({
  src: PictureURL
})`
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
`;

class ProfilePicture extends Component {
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
            <AiOutlineLeftSquare size={13} color={'black'}/>
            <AiOutlineRightSquare size={13} color={'black'}/>
          </IconContainer>
        </BrowserBar>
        <Picture/>
      </PicContainer>
    )
  }
}

export default ProfilePicture