import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data })=> {
const { frontmatter, body, excerpt } = data.mdx
return (
  <Layout>
   <SEO title={frontmatter.title} description={excerpt} />
    <div>
      <h1>{frontmatter.title}</h1>
    </div>
    <MDXRenderer>{body}</MDXRenderer>
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
    internal {
      content
    }
    body
    excerpt(pruneLength: 100)
  }
}
  `