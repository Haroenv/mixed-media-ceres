import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GridContainer, GridItem, TextLink } from '../components/styled';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        allDirectory {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={({ allDirectory: { edges } }) => (
      <Layout>
        <GridContainer>
          {edges.map(({ node: { id, name } }) => (
            <GridItem key={id}>
              {name === 'data' ? (
                <TextLink to="/info">info</TextLink>
              ) : (
                <TextLink to={name}>{name}</TextLink>
              )}
            </GridItem>
          ))}
        </GridContainer>
      </Layout>
    )}
  />
);

export default IndexPage;
