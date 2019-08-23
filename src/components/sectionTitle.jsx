import React, { Component } from 'react';
import styled from 'styled-components'

const SectionHeader = styled.div`
  font-family: "Work Sans", monospace;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
  margin: 40px;
  margin-left: 50px;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  &:hover {
    color: grey;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    border: none;
    color: rgb(51, 51, 51);
    text-overflow: clip;
    text-shadow: 3px 3px 0px lightblue;
    text-decoration: none;
  }
`;

class SectionTitle extends Component {
  render() {
    return (
      <SectionHeader>{this.props.title}</SectionHeader>
    )
  }
}

export default SectionTitle