import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

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
        <ul>
          {edges.map(({ node: { id, name } }) => (
            <li key={id}>
              {name === 'data' ? (
                <Link to="/info">info</Link>
              ) : (
                <Link to={name}>{name}</Link>
              )}
            </li>
          ))}
        </ul>
      </Layout>
    )}
  />
);

export default IndexPage;
