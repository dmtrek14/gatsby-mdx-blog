import { graphql, Link } from 'gatsby';
import React from "react";
//import Dump from '../components/Dump';
import Layout from "../components/layout";
import styled from 'styled-components';
const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;


// import { useSiteMetadata } from '../hooks/useSiteMetadata';


//import Image from "../components/image"
//import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
    
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage


export default ({ data }) => {
  return (
      <Layout>
      <IndexWrapper>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          )
        )}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
      }
    }
  }
`;