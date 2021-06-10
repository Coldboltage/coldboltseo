import React from 'react'
import Layout from "../components/layout"
import {Link, graphql} from "gatsby"
import SEO from "../components/seo"
import * as styles from "../styles/post.module.css"
import {GatsbyImage} from "gatsby-plugin-image"



const Post = ({data}) => {
  const {content, date, slug, title, seo:{title:seoTitle,metaDesc}} = data.wpPost;
  const categoryName = data.wpPost.categories.nodes[0].name;
  const image = data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const imageSrc = image.images.fallback.src;
  const twitterImage = `https://coldboltseo.com${imageSrc}`
  console.log(image)
    return (
        <Layout>
          <SEO title={seoTitle} description={metaDesc} twitterImage={twitterImage}/>
          <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <GatsbyImage image={image} className={styles.postImage}/>
            <div className={`${styles.innerContainer} ${styles.content}`} dangerouslySetInnerHTML={{__html: content}}></div>
          </div>
        </Layout>
    )
}

export const query = graphql`
  query indexWordPressQuery( $slugPost: String ) {
    wpPost(slug: {eq: $slugPost}) {
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                formats: [AUTO, WEBP, AVIF]
                placeholder: TRACED_SVG
                quality: 40
              )
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
      seo {
        title
        metaDesc
      }
    }
  }
`


export default Post
