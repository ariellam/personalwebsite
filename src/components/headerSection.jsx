import React, { Component } from 'react';
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const SectionText = styled.div`
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  font-weight: bold;
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
    text-shadow: 1px 1px 0px #fa9887;
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
        <AnchorLink offset={"30vh"}href={this.props.header}><SectionText>{this.props.text}</SectionText></AnchorLink>
      </div>
    )
  }
}

export default HeaderSection