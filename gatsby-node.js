const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (
    node.internal.type === 'MarkdownRemark' ||
    (node.internal.type === 'File' && node.extension !== 'md')
  ) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        info: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        weeks: allDirectory(filter: { relativePath: { ne: "" } }) {
          edges {
            node {
              name
            }
          }
        }
        images: allFile(filter: { extension: { ne: "md" } }) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.weeks.edges.forEach(({ node }) => {
        createPage({
          path: node.name,
          component: path.resolve(`./src/templates/listing.js`),
          context: {
            name: node.name,
          },
        });
      });
      result.data.info.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/markdown.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      result.data.images.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/image.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
