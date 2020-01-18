import React from "react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default ({ data, pageContext })=> {
const { frontmatter, body, excerpt } = data.mdx;
const { previous, next } = pageContext;
return (
  <Layout>
   <SEO title={frontmatter.title} description={excerpt} />
    <div>
      <h1>{frontmatter.title}</h1>
    </div>
    <MDXRenderer>{body}</MDXRenderer>
    <hr/>
    <div>Tags: {frontmatter.tags.map(tag => (
        <span className="lcars-link-button-purple">{tag}</span>
           
    ))}</div>
    <div style={{
      marginTop: `3rem`
    }}>
{previous === false ? null : (
      <>
      {previous && (
        <span style={{
          float: `left`
        }}>
        <Link to={previous.fields.slug}>
          <FontAwesomeIcon icon="long-arrow-alt-left" /> {previous.frontmatter.title}
        </Link>
        </span>
        
      )}
      </>
    )}
    {next === false ? null : (
      <>
        { next && (
          <span style={{
            float: `right`
          }}>
          <Link to={next.fields.slug}>
            {next.frontmatter.title} <FontAwesomeIcon icon="long-arrow-alt-right" />
          </Link>
          </span>
          
        )
        }
      </>
    )}
    </div>
    
  </Layout>
)
}

export const query = graphql`
query PostsBySlug($slug: String!){
  mdx(fields: { slug: {eq: $slug } }) {
    fields {
      slug
    }
    frontmatter {
      date
      title
      tags
    }
    body
    excerpt(pruneLength: 100)
  }
}
  `