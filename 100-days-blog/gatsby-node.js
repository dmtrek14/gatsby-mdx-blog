const path = require(`path`)
const _ = require("lodash")
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
  const postTemplate = path.resolve("src/templates/post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
   query {
    posts: allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    tags: allMdx {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
   }
   
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  var posts = result.data.posts.edges;
  posts.forEach(({node}, index) => {
      const previous = index === 0 ? null : posts[index - 1].node;
      const next = index === posts.length - 1 ? null : posts[index + 1].node;
 
      createPage({
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug,
          next,
          previous
        },
      })
      const tags = result.data.tags.group
      //make tags pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
          component: tagTemplate,
          context: {
            tag: tag.fieldValue
          }
        })
      })
    })
}
