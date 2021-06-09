import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/PostCard.module.css"

const FirstPostCard = ({ image, data }) => {
    const { wpPost: { categories, date, title, excerpt, slug } } = data
    const name = categories.nodes[0].name
    console.log(categories.nodes[0].name)
    return (
        <Link to={`/${slug}`} className={styles.firstCard}>
            <div class={styles.firstCardStyles}>
                <Link to={`/${slug}`}>
                    <GatsbyImage className={styles.firstImage} image={image} alt="first post" />
                </Link>
                <div className={styles.innerContainer}>
                    <div className={styles.taxomonies}>
                        <span><Link className={styles.link} to={`/${slug}`}>{name}</Link></span><span> - </span><Link className={styles.date} to={`/${slug}`}>{date}</Link>
                    </div>
                    <h3>{title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                    {/* <Link to={`/${slug}`}>Read more</Link> */}
                </div>
            </div>
        </Link>

    )
}

export default FirstPostCard
