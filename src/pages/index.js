import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";


export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Nujood's Thoughts</h1>
      <h4>{data.allMarkdownRemark.totalCount} </h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <span>
            {node.frontmatter.title} - {node.frontmatter.date}
          </span>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
      totalCount
    }
  }
`;
