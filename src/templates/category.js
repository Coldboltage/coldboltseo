import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import * as styles from "../styles/post.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const Category = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Hello there</h1>
            </div>
        </Layout>
    )
}

export default Category
