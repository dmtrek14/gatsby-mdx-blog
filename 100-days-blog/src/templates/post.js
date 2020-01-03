import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data })=> {
const { frontmatter, body } = data.mdx
return (
  <Layout>
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
  }
}
  `