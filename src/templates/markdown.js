import React from 'react';
import { graphql } from 'gatsby';
import { Content } from '../components/styled';
import Layout from '../components/layout';

export default ({ data }) => {
  const text = data.markdownRemark;
  return (
    <Layout>
      <Content dangerouslySetInnerHTML={{ __html: text.html }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;
