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
  console.log(JSON.stringify(result, null, 4))
    result.data.allMdx.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: node.fields.slug
        },
      })
  
    })
  

}
// const { createFilePath } = require(`gatsby-source-filesystem`);
// const path = require(`path`);
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(
//     'src/templates/post.js'
//   );
//   return graphql(`
//     {
//         allMdx(
//             sort: { fields: [frontmatter___date], order: DESC }
//             filter: { frontmatter: { published: { eq: true } } }
//           ) {
//             nodes {
//               fields {
//                 slug
//               }
//               frontmatter {
//                 title
//               }
//             }
//           }
//     }
//   `).then(result => {
//     if (result.errors) {
//       throw result.errors;
//     }
//     const posts = result.data.allMdx.nodes;
//     // create page for each mdx file
//     posts.forEach((post, index) => {
//         const previous =
//           index === posts.length - 1 ? null : posts[index + 1];
//         const next = index === 0 ? null : posts[index - 1];
//         createPage({
//           path: post.fields.slug,
//           component: blogPostTemplate,
//           context: {
//             slug: post.fields.slug,
//             previous,
//             next,
//           },
//         });
//       });
//   });
// };
