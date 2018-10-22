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
  padding: 2em 0.5em;
  text-align: center;

  &:hover {
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
  }
`;

const colors = [
  {
    color: '#f6a843',
    backgroundColor: '#383856',
  },
  {
    color: '#86d855',
    backgroundColor: '#181c0f',
  },
  {
    color: '#339a40',
    backgroundColor: '#000f47',
  },
  {
    color: '#8a8e38',
    backgroundColor: '#20030f',
  },
  {
    color: '#14116a',
    backgroundColor: '#08b690',
  },
  {
    color: '#f92420',
    backgroundColor: '#0c0517',
  },
  {
    color: '#757fa2',
    backgroundColor: '#2d0628',
  },
  {
    color: '#034f50',
    backgroundColor: '#eeb456',
  },
  {
    color: '#792298',
    backgroundColor: '#b3da4a',
  },
  {
    color: '#626b65',
    backgroundColor: '#f3fc86',
  },
  {
    color: '#f513eb',
    backgroundColor: '#1d0461',
  },
  {
    color: '#e5c726',
    backgroundColor: '#23155c',
  },
  {
    color: '#9a7d98',
    backgroundColor: '#030c4a',
  },
  {
    color: '#e0f51b',
    backgroundColor: '#6b4161',
  },
  {
    color: '#c9b035',
    backgroundColor: '#503188',
  },
  {
    color: '#b4d969',
    backgroundColor: '#002d54',
  },
  {
    color: '#519780',
    backgroundColor: '#041850',
  },
  {
    color: '#eb7a03',
    backgroundColor: '#173224',
  },
  {
    color: '#fe787d',
    backgroundColor: '#1622a0',
  },
  {
    color: '#2cf1f3',
    backgroundColor: '#19495a',
  },
  {
    color: '#4bf763',
    backgroundColor: '#5b2577',
  },
  {
    color: '#45b63b',
    backgroundColor: '#292b15',
  },
  {
    color: '#f9652b',
    backgroundColor: '#191f22',
  },
  {
    color: '#770ff0',
    backgroundColor: '#dbff92',
  },
  {
    color: '#e0b03e',
    backgroundColor: '#150d6d',
  },
  {
    color: '#6de131',
    backgroundColor: '#63293f',
  },
  {
    color: '#678d9d',
    backgroundColor: '#3b091c',
  },
  {
    color: '#f29881',
    backgroundColor: '#480840',
  },
  {
    color: '#f3d5c9',
    backgroundColor: '#714b35',
  },
  {
    color: '#dcda4a',
    backgroundColor: '#2120dc',
  },
  {
    color: '#df985b',
    backgroundColor: '#213977',
  },
  {
    color: '#e83f63',
    backgroundColor: '#160551',
  },
  {
    color: '#87c8a4',
    backgroundColor: '#2c3b83',
  },
  {
    color: '#7d3971',
    backgroundColor: '#c5cf96',
  },
  {
    color: '#06fe21',
    backgroundColor: '#18541f',
  },
  {
    color: '#daed28',
    backgroundColor: '#222232',
  },
  {
    color: '#336f53',
    backgroundColor: '#d0f3f9',
  },
  {
    color: '#c34493',
    backgroundColor: '#fffdf7',
  },
  {
    color: '#872902',
    backgroundColor: '#e5f95e',
  },
  {
    color: '#e37ae6',
    backgroundColor: '#022129',
  },
  {
    color: '#ce89d7',
    backgroundColor: '#11262e',
  },
  {
    color: '#9b9eab',
    backgroundColor: '#1a090b',
  },
  {
    color: '#df45a4',
    backgroundColor: '#02012f',
  },
  {
    color: '#3a2dbc',
    backgroundColor: '#fdca0f',
  },
  {
    color: '#2ed871',
    backgroundColor: '#1e19df',
  },
  {
    color: '#baa0b1',
    backgroundColor: '#0e1428',
  },
  {
    color: '#a45766',
    backgroundColor: '#effeba',
  },
  {
    color: '#817ff0',
    backgroundColor: '#1c1243',
  },
  {
    color: '#723539',
    backgroundColor: '#cbd040',
  },
  {
    color: '#29f5b6',
    backgroundColor: '#8b0c3c',
  },
];

const getRandomColors = () => colors[Math.floor(Math.random() * colors.length)];

export class GridItem extends Component {
  state = getRandomColors();
  render() {
    return (
      <StyledGridItem
        color={this.state.color}
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
