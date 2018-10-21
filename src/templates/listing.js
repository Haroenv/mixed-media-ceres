import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

export default ({
  data: {
    allFile: { edges },
  },
}) => {
  return (
    <Layout>
      <ul>
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
            <li key={id}>
              <Link to={slug}>{name}</Link>
            </li>
          ))}
      </ul>
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
