import React from "react"
import Link from "gatsby-link"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayout"
const BlogPage = ({ data }) => (
  <PrimaryLayout column="col-xs-6">
    {data.allMarkdownRemark.edges.map(post => (
      <Post
        image={post.node.frontmatter.image}
        title={post.node.frontmatter.title}
        excerpt={post.node.frontmatter.excerpt}
      />
    ))}
  </PrimaryLayout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            path
            title
            date
            author
            image
          }
        }
      }
    }
  }
`

export default BlogPage
