import React from 'react';
import { graphql } from 'gatsby';
import { Iframe } from '../components/styled';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default ({
  data: {
    file: { publicURL, childImageSharp },
  },
}) => (
  <Layout>
    {childImageSharp ? (
      <Img fluid={childImageSharp.fluid} />
    ) : (
      <Iframe src={publicURL} />
    )}
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 5120, quality: 98, traceSVG: { blackOnWhite: true }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
