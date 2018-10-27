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

  a {
    padding: 2em;
  }

  &:hover {
    background-color: ${props => props.backgroundColor};
    color: ${props => props.foregroundColor};
  }
`;

const colors = [
  {
    foregroundColor: 'white',
    backgroundColor: '#383856',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#181c0f',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#000f47',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#20030f',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#08b690',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#0c0517',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#2d0628',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#eeb456',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#b3da4a',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#f3fc86',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#1d0461',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#23155c',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#030c4a',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#503188',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#002d54',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#041850',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#173224',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#1622a0',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#19495a',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#5b2577',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#292b15',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#191f22',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#dbff92',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#150d6d',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#63293f',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#3b091c',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#480840',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#714b35',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#2120dc',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#213977',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#160551',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#2c3b83',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#c5cf96',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#18541f',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#222232',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#d0f3f9',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#fffdf7',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#e5f95e',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#022129',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#11262e',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#1a090b',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#02012f',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#fdca0f',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#1e19df',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#0e1428',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#effeba',
  },
  {
    foregroundColor: 'white',
    backgroundColor: '#1c1243',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#cbd040',
  },
  {
    foregroundColor: 'black',
    backgroundColor: '#29f5b6',
  },
];

const getRandomColors = () => colors[Math.floor(Math.random() * colors.length)];

export class GridItem extends Component {
  state = getRandomColors();
  render() {
    return (
      <StyledGridItem
        foregroundColor={this.state.foregroundColor}
        backgroundColor={this.state.backgroundColor}
        onMouseLeave={() => {
          this.setState(getRandomColors());
        }}
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
