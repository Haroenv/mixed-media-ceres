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
    foregroundColor: '#f6a843',
    backgroundColor: '#383856',
  },
  {
    foregroundColor: '#86d855',
    backgroundColor: '#181c0f',
  },
  {
    foregroundColor: '#339a40',
    backgroundColor: '#000f47',
  },
  {
    foregroundColor: '#8a8e38',
    backgroundColor: '#20030f',
  },
  {
    foregroundColor: '#14116a',
    backgroundColor: '#08b690',
  },
  {
    foregroundColor: '#f92420',
    backgroundColor: '#0c0517',
  },
  {
    foregroundColor: '#757fa2',
    backgroundColor: '#2d0628',
  },
  {
    foregroundColor: '#034f50',
    backgroundColor: '#eeb456',
  },
  {
    foregroundColor: '#792298',
    backgroundColor: '#b3da4a',
  },
  {
    foregroundColor: '#626b65',
    backgroundColor: '#f3fc86',
  },
  {
    foregroundColor: '#f513eb',
    backgroundColor: '#1d0461',
  },
  {
    foregroundColor: '#e5c726',
    backgroundColor: '#23155c',
  },
  {
    foregroundColor: '#9a7d98',
    backgroundColor: '#030c4a',
  },
  {
    foregroundColor: '#e0f51b',
    backgroundColor: '#6b4161',
  },
  {
    foregroundColor: '#c9b035',
    backgroundColor: '#503188',
  },
  {
    foregroundColor: '#b4d969',
    backgroundColor: '#002d54',
  },
  {
    foregroundColor: '#519780',
    backgroundColor: '#041850',
  },
  {
    foregroundColor: '#eb7a03',
    backgroundColor: '#173224',
  },
  {
    foregroundColor: '#fe787d',
    backgroundColor: '#1622a0',
  },
  {
    foregroundColor: '#2cf1f3',
    backgroundColor: '#19495a',
  },
  {
    foregroundColor: '#4bf763',
    backgroundColor: '#5b2577',
  },
  {
    foregroundColor: '#45b63b',
    backgroundColor: '#292b15',
  },
  {
    foregroundColor: '#f9652b',
    backgroundColor: '#191f22',
  },
  {
    foregroundColor: '#770ff0',
    backgroundColor: '#dbff92',
  },
  {
    foregroundColor: '#e0b03e',
    backgroundColor: '#150d6d',
  },
  {
    foregroundColor: '#6de131',
    backgroundColor: '#63293f',
  },
  {
    foregroundColor: '#678d9d',
    backgroundColor: '#3b091c',
  },
  {
    foregroundColor: '#f29881',
    backgroundColor: '#480840',
  },
  {
    foregroundColor: '#f3d5c9',
    backgroundColor: '#714b35',
  },
  {
    foregroundColor: '#dcda4a',
    backgroundColor: '#2120dc',
  },
  {
    foregroundColor: '#df985b',
    backgroundColor: '#213977',
  },
  {
    foregroundColor: '#e83f63',
    backgroundColor: '#160551',
  },
  {
    foregroundColor: '#87c8a4',
    backgroundColor: '#2c3b83',
  },
  {
    foregroundColor: '#7d3971',
    backgroundColor: '#c5cf96',
  },
  {
    foregroundColor: '#06fe21',
    backgroundColor: '#18541f',
  },
  {
    foregroundColor: '#daed28',
    backgroundColor: '#222232',
  },
  {
    foregroundColor: '#336f53',
    backgroundColor: '#d0f3f9',
  },
  {
    foregroundColor: '#c34493',
    backgroundColor: '#fffdf7',
  },
  {
    foregroundColor: '#872902',
    backgroundColor: '#e5f95e',
  },
  {
    foregroundColor: '#e37ae6',
    backgroundColor: '#022129',
  },
  {
    foregroundColor: '#ce89d7',
    backgroundColor: '#11262e',
  },
  {
    foregroundColor: '#9b9eab',
    backgroundColor: '#1a090b',
  },
  {
    foregroundColor: '#df45a4',
    backgroundColor: '#02012f',
  },
  {
    foregroundColor: '#3a2dbc',
    backgroundColor: '#fdca0f',
  },
  {
    foregroundColor: '#2ed871',
    backgroundColor: '#1e19df',
  },
  {
    foregroundColor: '#baa0b1',
    backgroundColor: '#0e1428',
  },
  {
    foregroundColor: '#a45766',
    backgroundColor: '#effeba',
  },
  {
    foregroundColor: '#817ff0',
    backgroundColor: '#1c1243',
  },
  {
    foregroundColor: '#723539',
    backgroundColor: '#cbd040',
  },
  {
    foregroundColor: '#29f5b6',
    backgroundColor: '#8b0c3c',
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
