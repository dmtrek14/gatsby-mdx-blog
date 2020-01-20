import React from "react";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image"
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default ({ data, pageContext })=> {
const { frontmatter, body, excerpt } = data.mdx;
const { previous, next } = pageContext;
let featuredImgFluid = frontmatter.featuredImage.childImageSharp.fluid
return (
  <Layout>
   <SEO title={frontmatter.title} description={excerpt} />
    <div>
    <Img fluid={featuredImgFluid} />
      <h1>{frontmatter.title}</h1>
    </div>
    <MDXRenderer>{body}</MDXRenderer>
    <hr/>
    <div>Tags: {frontmatter.tags.map(tag => (
        <span className="lcars-link-button-purple">{tag}</span>
           
    ))}</div>
    <div style={{
      marginTop: `3rem`
    }} className="post-info">
{previous === false ? null : (
      <>
      {previous && (
        <div >
        <Link to={previous.fields.slug} className="lcars-link-button-yellow">
          <FontAwesomeIcon icon="long-arrow-alt-left" /> {previous.frontmatter.title}
        </Link>

        </div>
        
      )}
      </>
    )}
    {next === false ? null : (
      <>
        { next && (
          <div >
          <Link to={next.fields.slug} className="lcars-link-button-yellow">
            {next.frontmatter.title} <FontAwesomeIcon icon="long-arrow-alt-right" />
          </Link>
          </div>
          
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
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 600, quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    body
    excerpt(pruneLength: 100)
  }
}
`