import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import Timeline from '../components/TimeLine'

const Container = styled.div`
  /* Using different fonts */
 font-family: 'Open Sans', sans-serif;
 h1 {
   color: rgb(68, 85, 112);
   text-align:center;
   margin-top: 30px;
   font-size: 30px;
   letter-spacing: 7px;
 }
 p {
   color: rgb(68, 85, 112);
   text-align:center;
   margin-top: 35px;
   font-size: 25px;
   letter-spacing: 1px;
 }
`

const Projects = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Seo title='Projects' />
        <h1>Project Home</h1>
        <p>In process or planned activity</p>
        <Timeline data={data.allMarkdownRemark.edges} />
      </Container>
    </Layout>
  )
}

export default Projects

export const projectQ = graphql`
  query {
    allMarkdownRemark(
     sort: { order: DESC, fields: [frontmatter___date]},
     filter: {fileAbsolutePath: {regex: "/projects/.*\\.md$/"}}
   ){
      edges {
        node {
          id
          frontmatter {
            category
            color
            date(formatString: "MMMM, YYYY")
            text
            link
            linkinfo
            secondLink
            secondLinkInfo
          }
        }
      }
    }
 }
`
