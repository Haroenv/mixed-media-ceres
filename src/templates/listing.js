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
        {edges
          .map(({ node: { id, name, fields, childMarkdownRemark } }) => {
            const slug = fields ? fields.slug : childMarkdownRemark.fields.slug;
            return {
              id,
              name,
              slug,
            };
          })
          .map(({ id, slug, name }) => (
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
    allFile(filter: { relativeDirectory: { eq: $name } }) {
      edges {
        node {
          id
          name
          relativeDirectory
          childMarkdownRemark {
            fields {
              slug
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
