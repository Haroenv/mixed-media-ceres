import React from 'react';
import styled from 'react-emotion';
import { graphql } from 'gatsby';
import { border } from '../components/styled';
import Layout from '../components/layout';

const Content = styled('div')`
  margin: 0 auto;
  max-width: 60em;
  padding: 0.67em 1em 1.45em;
  border: ${border};
  border-top: none;
`;

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
