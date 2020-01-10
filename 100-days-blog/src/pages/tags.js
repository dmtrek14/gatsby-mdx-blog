import { graphql } from 'gatsby';
import React from "react";
import Layout from "../components/layout";


export default ({ data }) => {
const { edges, group } = data.allMdx;
  return (
      <Layout>
      <div>
      <h1>Tags</h1>
        {edges.map(
          ({ node}) => (
            <div key={node.id}>

               
            </div>
          )
        )}
        <div>
        {group.map((tag) => (
            <span style={
          {
            padding:`4px`,
            backgroundColor: `#950451`,
            color: `white`,
            borderRadius: `4px`,
            marginRight: `0.8rem`
          }}>{tag.fieldValue}</span>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___tags}) {
        edges {
            node {
              fields {
                slug
              }
              id
            }
          }
          group(field: frontmatter___tags) {
            fieldValue
          }
      }
}
`