import React, { Component } from 'react';
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const SectionText = styled.div`
  font-family: 'Major Mono Display', monospace;
  font-size: 18px;
  font-weight: bold;
  text-transform: lowercase;
  color: black;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  padding: 20px;
  text-decoration: none;
  &:hover {
    color: grey;
    -webkit-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    border: none;
    color: rgb(51, 51, 51);
    text-align: center;
    text-overflow: clip;
    text-shadow: 3px 3px 0px lightblue;
    text-decoration: none;
  }
  a {
    text-decoration: none;

  }
`

class HeaderSection extends Component {
  render () {
    return (
      <div>
        <AnchorLink href={this.props.header}><SectionText>{this.props.text}</SectionText></AnchorLink>
      </div>
    )
  }
}

export default HeaderSection