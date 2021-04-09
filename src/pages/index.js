import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import FirstPostCard from "../components/FirstPostCard"
import PostCard from "../components/PostCard"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../styles/index.module.css"

const IndexPage = ({ data }) => {
  const image = data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  // data.allWpPost.nodes.shift()
  const posts = data.allWpPost.nodes

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.container}>
        <h1>Esports SEO advice for Esports and Gaming</h1>
        <p>Explaining what makes good SEO in Esports and Gaming.</p>
        <FirstPostCard image={image} data={data} />
        {/* <GatsbyImage className={styles.firstImage} image={image} alt="first post" /> */}
        <div className={styles.innerContainer}>
          <PostCard image={image} posts={posts} grid/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPost {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG, quality: 50)
            }
          }
        }
      }
      categories {
        nodes {
          name
        }
      }
      date(formatString: "Do MMMM YYYY")
      title
      slug
      excerpt
    }
    allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Esports SEO"}}}}}
      limit: 7
      skip: 1
    ) {
      nodes {
        categories {
          nodes {
            name
          }
        }
        date(formatString: "MMMM DD YYYY")
        title
        slug
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 560, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG, quality: 50)
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
