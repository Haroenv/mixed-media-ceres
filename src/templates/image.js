import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <Img fluid={fluid} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      id
      childImageSharp {
        fluid(maxWidth: 5120, quality: 98, traceSVG: { blackOnWhite: true }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
