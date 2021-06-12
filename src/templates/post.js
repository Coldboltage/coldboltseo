import React from 'react'
import Layout from "../components/layout"
import {graphql} from "gatsby"
import Seo from "../components/seo"
import * as styles from "../styles/post.module.css"
import {GatsbyImage} from "gatsby-plugin-image"



const Post = ({data}) => {
  const {content, schemaDate, title, slug, seo:{title:seoTitle,metaDesc}} = data.wpPost;
  const image = data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const imageSrc = image.images.fallback.src;
  const twitterImage = `https://coldboltseo.com${imageSrc}`
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://coldboltseo.com/${slug}`
    },
    "headline": title,
    "description": metaDesc,
    "image": `https://coldboltseo.com${imageSrc}`,  
    "author": {
      "@type": "Person",
      "name": "Alan Reid"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "ColdboltSEO",
      "logo": {
        "@type": "ImageObject",
        "url": "https://coldboltseo.com/static/addbbb878374d408719b768aec6ab155/5cef4/coldboltseologo-e1543939940324.avif"
      }
    },
    "datePublished": schemaDate,
  }
  console.log(image)
    return (
        <Layout>
          <Seo title={seoTitle} description={metaDesc} twitterImage={twitterImage} schemaMarkup={schema} slug={slug}/>
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
      schemaDate:date(formatString: "YYYY-MM-DD")
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
