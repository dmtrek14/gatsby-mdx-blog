import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    {previous === false ? null : (
      <>
      {previous && (
        <Link to={previous.fields.slug}>
          <p>{previous.frontmatter.title}</p>
        </Link>
      )}
      </>
    )}
    {next === false ? null : (
      <>
        { next && (
          <Link to={next.fields.slug}>
            <p>{next.frontmatter.title}</p>
          </Link>
        )
        }
      </>
    )}
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
    }
    body
    excerpt(pruneLength: 100)
  }
}
  `