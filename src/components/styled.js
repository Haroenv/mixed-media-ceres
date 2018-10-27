import styled from 'react-emotion';
import { Link } from 'gatsby';
import React, { Component } from 'react';

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
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};

  a {
    padding: 2em;
  }
`;
/*
const colors = [
  {
    foregroundColor: 'white',
    backgroundColor: 'red',
  },
  {
    foregroundColor: 'white',
    backgroundColor: 'black',
  },
  {
    foregroundColor: 'white',
    backgroundColor: 'blue',
  },
  {
    foregroundColor: 'black',
    backgroundColor: 'green',
  },
  {
    foregroundColor: 'black',
    backgroundColor: 'yellow',
  },
];
*/

const getRandom255 = () => Math.round(Math.random() * 255);
const getRandomColors = () => ({
  foregroundColor: 'black',
  backgroundColor: `rgb(${[getRandom255(), getRandom255(), getRandom255()].join(
    ','
  )})`,
});
//const getRandomColors = () => colors[Math.floor(Math.random() * colors.length)];

export class GridItem extends Component {
  state = {
    foregroundColor: 'black',
    backgroundColor: 'white',
  };
  render() {
    return (
      <StyledGridItem
        foregroundColor={this.state.foregroundColor}
        backgroundColor={this.state.backgroundColor}
        onMouseEnter={() => this.setState(getRandomColors())}
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
