import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import SEO from "./seo"
import * as styles from "../styles/PostCard.module.css"

const PostCard = ({ image, posts }) => {
    return (
        <div className={styles.grid}>
            {posts.map((post, index) => {
                // const {} = post
                const { categories, date, title, excerpt, slug } = post
                const name = categories.nodes[0].name
                const image = post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                console.log()
                return (
                    <div className={styles.card}>
                        <Link to={`/${slug}`}>
                            <GatsbyImage className={styles.postImage} image={image} alt="first post" />
                        </Link>
                        <div className={styles.taxomonies}>
                            <span><Link className={styles.link} to={`/${name}`}>{name}</Link></span><span> - </span><Link className={styles.date} to={`/${name}`}>{date}</Link>
                        </div>
                        <h3>{title}</h3>
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: excerpt }}></p>
                        </div>
                        <Link to={`/${slug}`}>Read more</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostCard
