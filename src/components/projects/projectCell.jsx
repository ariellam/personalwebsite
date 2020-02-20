import React, { Component } from 'react'
import styled from 'styled-components'
import ProjectButtons from './projectButtons';
import ProjectDescription from './projectDescription'

const ProjectCellContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 465px;
`

const ProjectDetails = styled.div`
  height: 150px;
  border-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`

const HeaderImage = styled.img`
  z-index: 5;
  width: 100%;
  opacity: 1;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
`;

const HeaderImageHover = styled.img`
  position: absolute;
  width: 100%;
  opacity: 100%;
`;

class ProjectCell extends Component {
  state = {
    hover: false
  };

  changeImage = (hover) => {
    this.setState({ hover })
  }

  render () {
    return (
      <ProjectCellContainer>
        <>
          {/* <HeaderImageHover src={this.props.project.imageHover} /> */}
          <HeaderImage src={this.props.project.image}/>
        </>
        <ProjectDetails>
          <ProjectDescription
            title={this.props.project.title}
            subtitle={this.props.project.subtitle}
            description={this.props.project.description}
          />
          <ProjectButtons
            github={this.props.project.github}
            devpost={this.props.project.devpost}
            video={this.props.project.video}
          />
        </ProjectDetails>
      </ProjectCellContainer>
    );
  }
}

export default ProjectCell