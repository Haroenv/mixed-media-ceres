import React from 'react';
import { graphql } from 'gatsby';
import { Content, Iframe } from '../components/styled';
import Layout from '../components/layout';
import Img from 'gatsby-image';

export default ({
  data: {
    file: { publicURL, image, markdown },
  },
}) => (
  <Layout>
    {image ? (
      <Img fluid={image.fluid} />
    ) : markdown ? (
      <Content dangerouslySetInnerHTML={{ __html: markdown.html }} />
    ) : (
      <Iframe src={publicURL} />
    )}
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      publicURL
      image: childImageSharp {
        fluid(maxWidth: 5120, quality: 98, traceSVG: { blackOnWhite: true }) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
      markdown: childMarkdownRemark {
        html
      }
    }
  }
`;
