import React, { Component } from 'react'
import styled from 'styled-components'
import { FaGithub, FaYoutube } from "react-icons/fa";
import DevpostIcon from "../../assets/devpost.png";

const ProjectButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`

const ProjectButton = styled.a`
  font-size: 14px;
  font-family: 'Work Sans', monospace;
  font-style: normal;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-left: 1px;
  bottom: 0;
`
const Devpost = styled.img.attrs({
  src: DevpostIcon
})`
  width: 16px;
  height: 14px;
  &:hover {
    opacity: 0.5;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
  }
`;

class ProjectButtons extends Component {
  render () {
    return (
      <ProjectButtonsWrapper>
        {this.props.github ? <ProjectButton href={this.props.github}><FaGithub/></ProjectButton> : null}
        {this.props.devpost ? <ProjectButton href={this.props.devpost}><Devpost/></ProjectButton> : null}
        {this.props.video ? <ProjectButton href={this.props.video}><FaYoutube/></ProjectButton> : null}
      </ProjectButtonsWrapper>
    )
  }
}

export default ProjectButtons