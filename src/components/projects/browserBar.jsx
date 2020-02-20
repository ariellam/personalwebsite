import React, { Component } from 'react'
import styled from 'styled-components'
import {AiOutlineCloseSquare, AiOutlinePlusSquare, AiOutlineMinusSquare, AiOutlineLeftSquare, AiOutlineRightSquare} from "react-icons/ai";

const BrowserBarContainer = styled.div`
  height: 14px;
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

class BrowserBar extends Component {
  render () {
    return (
      <BrowserBarContainer>
        <IconContainer>
          <AiOutlineCloseSquare size={13} color={'black'}/>
          <AiOutlinePlusSquare size={13} color={'black'}/>
          <AiOutlineMinusSquare size={13} color={'black'}/>
        </IconContainer>
        <IconContainer>
          <AiOutlineLeftSquare size={13} color={'black'}/>
          <AiOutlineRightSquare size={13} color={'black'}/>
        </IconContainer>
      </BrowserBarContainer>
    )
  }
}

export default BrowserBar