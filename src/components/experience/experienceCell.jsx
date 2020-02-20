import React, { Component } from 'react'
import styled from 'styled-components'
import { FaExternalLinkAlt } from "react-icons/fa";
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';

const ExpCellContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Company = styled.a`
  color: black;
  font-family: "Work Sans", monospace;
  font-size: 18pt;
  font-weight: 600;
  &:hover {
    color: grey;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    border: none;
    color: rgb(51, 51, 51);
    text-overflow: clip;
    text-shadow: 3px 3px 0px ${props => props.color};
    text-decoration: none;
  }
`;

const CompanyLink = styled.a`
  margin-left: 10px;
  margin-top: 3px;
`
const TechStackTitle = styled.div`
  color: black;
  font-family: "Work Sans", monospace;
  font-size: 11pt;
  margin-bottom: -13px;
  width: 200px;
`;

const TechStack = styled.ul`
  width: 70%;
  color: grey;
  margin-left: -23px;
  list-style-type: circle;
`;


const Position = styled.div`
  font-size: 14pt;
  font-family: "Work Sans", monospace;
`

const Line = styled.div`
  width: ${props => props.hover ? "20vw" : 0};
  height: 1px;
  background-color: ${props => props.color};
  margin-bottom: -1px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  justify-content: flex-start;
  width: 500px;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Dates = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-family: "Work Sans", monospace;
  font-size: 11pt;
  margin: 10px;
  margin-left: 0px;
  width: 200px;
`;

const Description = styled.ul`
  margin-left: -23px;
  list-style-type: circle;
  line-height: 100%;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: -5px;
  margin-top: -5px;
  border-radius: 50%;
  border: 1px solid lightgrey;
  @media (min-width: 1170px) {
    width: 70px;
    height: 70px;
  }
`;

class ExperienceCell extends Component {
  renderListCells = (description) => {
    var descArray = []
    description.forEach(function(line){
      descArray.push(<li>{line}</li>)
    })
    return descArray
  }

  render () {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ 
          color: '#fff',
          borderRadius: 0,
          border: '1px solid lightgrey'
        }}
        contentArrowStyle={{ 
          border: '0.5px solid lightgrey', 
          paddingRight: '15px', 
          zIndex: -100}}
        date="2011 - present"
        iconStyle={{ border: ' 10px grey'}}
        icon={<Logo src={this.props.data.logo}/>}
      >
        <Header>
          <Title>
            <Company href={this.props.data.link} color={this.props.data.color}>{this.props.data.company}</Company>
            {this.props.data.link ? <CompanyLink href={this.props.data.link} target="_blank"><FaExternalLinkAlt /></CompanyLink> : null}
          </Title>
          <Line color={this.props.data.color}/>
          <Dates>{this.props.data.dates}</Dates>
          <TechStackTitle>Tech Stack</TechStackTitle>
          <TechStack>{this.renderListCells(this.props.data.stack)}</TechStack>
          <Position>{this.props.data.position}</Position>
          <Description>{this.renderListCells(this.props.data.description)}</Description>
        </Header>
        {/* </Body> */}
      </VerticalTimelineElement>
    );
  }
}

export default ExperienceCell