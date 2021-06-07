import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Item from '../components/GalleryCard'

const Container = styled.section`
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

const Gallery = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Seo title="Gallery" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Item
            key={node.frontmatter.path}
            name={node.frontmatter.title}
            img={node.frontmatter.img}
          />
        ))}
      </Container>
    </Layout>
  )
}

export default Gallery

export const galleryQ = graphql`
  query {
    allMarkdownRemark(
      sort:{fields:[frontmatter___priority], order:DESC },
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
