import { graphql, Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";


export default ({ data }) => {
  return (
      <Layout>
      <div>
      <h1>Posts About My Journey with Gatsby</h1>
      <p>{data.allMdx.totalCount} Posts</p>
        {data.allMdx.edges.map(
          ({ node}) => (
            <div key={node.id}>
             
                <h2> 
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h2>
                
                <p class="date">{node.frontmatter.date}</p>
                
                <p>{node.excerpt}</p>
              
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
    totalCount,
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY MMMM D")
          tags
        }
        excerpt(pruneLength: 200)
        id
      }
    }
  }
}
`