import React from 'react'
import Layout from "../components/layout"
import {Link, graphql} from "gatsby"
import SEO from "../components/seo"
import * as styles from "../styles/post.module.css"
import {GatsbyImage} from "gatsby-plugin-image"



const Post = ({data}) => {
  const {content, date, excerpt, slug, title} = data.wpPost;
  const categoryName = data.wpPost.categories.nodes[0].name;
  const image = data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  console.log(image)
    return (
        <Layout>
          <SEO title="post"/>
          <div className={styles.container}>
            <h1>{title}</h1>
            <GatsbyImage image={image}/>
            <div className={`${styles.innerContainer} ${styles.content}`} dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
        </Layout>
    )
}

export const query = graphql`
  query indexWordPressQuery($slug: String) {
    wpPost(slug: {eq: $slug}) {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                quality: 95
              )
              fluid {
                src
              }
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
      content
    }
  }
`

export default Post
