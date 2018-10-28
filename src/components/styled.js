import styled from 'react-emotion';
import { Link } from 'gatsby';
import React, { Component } from 'react';
import chroma from 'chroma-js';

export const border = '1px solid black';

export const Content = styled('div')`
  margin: 0 auto;
  max-width: 60em;
  padding: 0.67em 1em 1.45em;
  border: ${border};
  border-top: none;
`;

export const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const StyledGridItem = styled('div')`
  border-right: ${border};
  border-bottom: ${border};
  text-align: center;
  color: black;
  background-color: ${props => props.backgroundColor};

  a {
    padding: 2em;
  }
`;

const AA_RATE = 4.5;

const getRandomColor = () => {
  const color = chroma.random();
  if (chroma.contrast(color, 'black') < AA_RATE) {
    return getRandomColor();
  }
  return color.toString();
};

export class GridItem extends Component {
  state = {
    backgroundColor: 'white',
  };
  render() {
    return (
      <StyledGridItem
        backgroundColor={this.state.backgroundColor}
        onMouseEnter={() =>
          this.setState({ backgroundColor: getRandomColor() })
        }
      >
        {this.props.children}
      </StyledGridItem>
    );
  }
}

export const TextLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

export const Spacer = styled('span')`
  color: transparent;
`;

export const Iframe = styled('iframe')`
  border: none;
  width: 100%;
  height: 100%;
`;
