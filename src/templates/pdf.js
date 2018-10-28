import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Iframe } from '../components/styled';

export default ({
  data: {
    file: { publicURL },
  },
}) => {
  return (
    <Layout>
      <Iframe src={publicURL} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      publicURL
    }
  }
`;
