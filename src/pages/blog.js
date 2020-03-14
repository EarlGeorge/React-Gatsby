import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Layout from '../components/Layout'
import Seo from '../components/seo'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'

const Search = styled.div`
  position: relative;
  top: 20px;
`
const Container = styled.div`
  margin: 40px 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
`

export default class Blog extends Component {

  state = {
    posts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.data.allMarkdownRemark.edges,
    })
  }

  searchPosts = (e) => {
    let currentItems = []
    let searchingItem = []
    if (e.target.value !== '') {
      currentItems = this.props.data.allMarkdownRemark.edges
      searchingItem = currentItems.filter(({ node }) => {
        const Title = node.frontmatter.title.toLowerCase()
        const Tags = node.frontmatter.tags.toLowerCase()
        const filter = e.target.value.toLowerCase()
        let bool = false
        if (Title.includes(filter) || Tags.includes(filter)) {
          bool = true
        }
        return bool
      })
    } else {
      searchingItem = this.props.data.allMarkdownRemark.edges
    }
    this.setState({
      posts: searchingItem,
    })
  }

  render() {
    return (
      <Layout>
        <Seo title='Blog' />
        <Search> 
          <SearchBar searching={this.searchPosts} /> 
        </Search>
        <Container>
          {this.state.posts.map(({ node }) => (
            <section key={node.id}>
              <BlogCard
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                tags={node.frontmatter.tags.split(' ')}
                img={node.frontmatter.image}
              />
            </section>
          ))}
        </Container>
      </Layout>
    )
  }
}

export const blogQ = graphql`
  query {
    allMarkdownRemark(
     sort: { order: DESC, fields: [frontmatter___date]},
     filter: {fileAbsolutePath: {regex: "/blog/.*\\.md$/"}}
   ){
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
            tags
          }
        }
      }
    }
 }
`
