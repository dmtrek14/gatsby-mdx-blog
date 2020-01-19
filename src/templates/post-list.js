import { graphql, Link } from 'gatsby';
import React from "react";
import Layout from "../components/layout";


export default ({ data, pageContext }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
  return (
      <Layout>
      <div>
      <h1>My Journey with Gatsby</h1>
      <div className="post-info">
      <div className="posts"><span className="lcars-link-button-pink">{data.allMdx.totalCount} Posts</span></div>
      <div className="tags"><Link className="lcars-link-button-purple" to="/tags/">Tags</Link></div>
      </div>

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
      <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} className="lcars-link-button-yellow" rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link className="lcars-link-button-yellow"
                to={`/${i === 0 ? '' : i + 1}`} >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} className="lcars-link-button-yellow" rel="next">
              Next Page →
            </Link>
          )}
        </ul>
    </Layout>
  );
};

export const query = graphql`
query blogPageQuery($skip: Int!, $limit: Int!){
  allMdx(
    sort: {fields: frontmatter___date, order: DESC}, 
    filter: {frontmatter: {published: {eq: true}}},
    limit: $limit,
    skip: $skip
    ) {
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