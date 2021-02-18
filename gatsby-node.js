const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions

    node.collection = getNode(node.parent).sourceInstanceName
    const slug = createFilePath({ node, getNode, basePath: "pages" })

    createNodeField({
      node,
      name: "slug",
      value: slug
    })
  }
};


module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blogPost/index.js`)

  const res = await graphql(`
      query {
          allMarkdownRemark {
              edges {
                  node {
                    fields {
                      slug
                    }
                  }
              }
          }
      }
  `)

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })
}

// Customizing the GraphQL Schema 
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      link: String
      linkinfo: String
      secondLink: String
      secondLinkInfo: String
    }
  `
  createTypes(typeDefs)
}
