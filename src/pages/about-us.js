import React from 'react'
import Layout from "../components/layout"
import * as styles from "../styles/about.module.css"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const About = ({data}) => {
    const {wpPage:{content, title, seo:{metaDesc}}} = data
    return (
        <Layout>
          <Seo title={title} description={metaDesc}/>
            <div className={styles.container}>
            <StaticImage
              className={styles.alanImage}
              placeholder="blurred"
              width= "1200"
              height="500"
              src="../images/alanprofile.jpg"
              quality={45}
              formats={["AUTO", "AVIF", "WEBP"]}
              transformOptions={{"cropFocus": "entropy"}}              
            />
            <h2 className={styles.title}>About Us</h2>
            <div className={`${styles.innerContainer} ${styles.contentTitle}`} dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  {
    wpPage(slug: {eq: "about-us"}) {
      content
      title
      seo {
        metaDesc
      }
    }
  }
`

export default About
