import React, { Component } from 'react';
import styled from 'styled-components'

const SectionHeader = styled.div`
  font-family: 'Work Sans', monospace;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
  margin: 2vw;
`
//   text-shadow: 2px 2px 0px #FFB800;

class SectionTitle extends Component {
  render() {
    return (
      <SectionHeader>{this.props.title}</SectionHeader>
    )
  }
}

export default SectionTitle