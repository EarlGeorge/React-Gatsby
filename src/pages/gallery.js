import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'


import Layout from '../components/Layout'
import Item from '../components/GalleryCard'

const CardGrid = styled.section`
  position: relative;
  width: 100%;
  margin: 40px 0;
  display: grid;
  grid-gap: 6px;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-auto-rows: 300px;
  align-content: center;
  justify-content: center;
`

export default ({ data }) => {
  return (
    <Layout>
      <CardGrid>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item
            key={node.frontmatter.path}
            name={node.frontmatter.title}
            img={node.frontmatter.img}
          />
        ))}
      </CardGrid>
    </Layout>
  )
}

export const gallery = graphql`
  query {
    allMarkdownRemark(
      sort:{fields:[frontmatter___priority], order:ASC},
      filter:{fileAbsolutePath: {regex: "/gallery/.*\\.md$/"}}
    ) {
      edges {
        node {
          frontmatter {
            title
            img
            path  
          }
        }
      }
    }
  }
`
