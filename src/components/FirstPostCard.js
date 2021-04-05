import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "../styles/PostCard.module.css"

const FirstPostCard = ({image, data}) => {
    const {wpPost: {categories, date, title, excerpt, slug} } = data
    const name = categories.nodes[0].name
    console.log(categories.nodes[0].name)
    return (
        <div>
            <GatsbyImage className={styles.firstImage} image={image} alt="first post" />
            <div className={styles.innerContainer}>
                <p>{`${name} - ${date}`}</p>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{__html:excerpt}}></p>
                <Link to={`/${slug}`}>Read more</Link>
            </div>
        </div>
    )
}

export default FirstPostCard
