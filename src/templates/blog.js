import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import * as styles from "../styles/category.module.css"
import { GatsbyImage } from "gatsby-plugin-image"
import PostCard from "../components/PostCard"

const Category = ({ data }) => {
    const {allWpPost:{nodes:posts}} = data

    const image = data.allWpPost.nodes.featuredImage
    console.log(data)
    const { wpCategory: { name, description, seo:{metaDesc} } } = data
    return (
        <Layout>
          <SEO title={name} description={metaDesc}/>
            <div>
                <div className={styles.hero}>
                    <div className={styles.heroText}>
                        <h5>Category</h5>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
                </div>
                <div className={styles.container}>
                    <PostCard posts={posts} grid/>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
query blogPage ($skip: Int!, $limit: Int!) {
    wpCategory(slug: {eq: "blog"}) {
      name
      description
      seo {
        metaDesc
      }
    }
    allWpPost(
        filter: {categories: {nodes: {elemMatch: {slug: {eq: "blog"}}}}}
        sort: {fields: date, order: DESC}
        skip: $skip
        limit: $limit
        ) {
      nodes {
        slug
        date(formatString: "Do MMMM YYYY")
        title
        excerpt
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                    width: 600
                    formats: [AUTO, WEBP, AVIF]
                    placeholder: TRACED_SVG
                    quality: 40
                  )
              }
            }
          }
        }
      }
    }
  }
`  

export default Category
