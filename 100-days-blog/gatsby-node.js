const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode});
    createNodeField({
      node, 
      name: `slug`,
      value: slug,
    });
   }
}

exports.createPages = async ({graphql, actions})=> {
  const { createPage } = actions;
  const result = await graphql(`
   query {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
   }
   
  `)
  var posts = result.data.allMdx.edges;
  posts.forEach(({node}, index) => {
      const previous = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
 
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug,
          next,
          previous
        },
      })
  
    })
}
