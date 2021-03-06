import * as React from "react"
import { graphql } from "gatsby"
import FirstPostCard from "../components/FirstPostCard"
import PostCard from "../components/PostCard"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/index.module.css"

const IndexPage = ({ data }) => {
  const image = data.wpPost.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  // data.allWpPost.nodes.shift()
  const posts = data.allWpPost.nodes
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ColdboltSEO",
    "alternateName": "Coldbolt SEO",
    "url": "https://coldboltseo.com",
    "logo": "https://coldboltseo.com/static/addbbb878374d408719b768aec6ab155/5cef4/coldboltseologo-e1543939940324.avif",
    "sameAs": "https://twitter.com/itscoldbolt"
  }
  return (
    <Layout>
      <Seo title="Home" description={data.wpPage.seo.metaDesc} schemaMarkup={schema} />
      <div className={styles.container}>
        <h1>Esports SEO advice for Esports and Gaming</h1>
        <p>Explaining what makes good SEO in Esports and Gaming.</p>
        <FirstPostCard image={image} data={data} />
        {/* <GatsbyImage className={styles.firstImage} image={image} alt="first post" /> */}
        <div>
          <PostCard image={image} posts={posts} grid/>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    wpPost(categories: {nodes: {elemMatch: {slug: {eq: "esports-seo"}}}}) {
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
    wpPage(slug: {eq: "homepage"}) {
      title
      seo {
        metaDesc
      }
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
