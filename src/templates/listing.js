import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GridContainer, GridItem, TextLink } from '../components/styled';

export default ({
  data: {
    allFile: { edges },
  },
}) => {
  return (
    <Layout>
      <GridContainer>
        {edges.map(({ node: { id, name, fields: { slug } } }) => (
          <GridItem key={id}>
            <TextLink to={slug}>{name}</TextLink>
          </GridItem>
        ))}
      </GridContainer>
    </Layout>
  );
};

export const query = graphql`
  query($name: String!) {
    allFile(
      filter: { relativeDirectory: { eq: $name } }
      sort: { fields: [name] }
    ) {
      edges {
        node {
          id
          name
          relativeDirectory
          fields {
            slug
          }
        }
      }
    }
  }
`;
