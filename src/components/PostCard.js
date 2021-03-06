import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../styles/PostCard.module.css"

const PostCard = ({ image, posts, grid }) => {
    return (
        <div className={`${styles.grid} ${grid && styles.grid2}`}>
            {posts.map((post, index) => {
                // const {} = post
                const { categories, date, title, excerpt, slug } = post
                const name = categories.nodes[0].name
                const image = post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                return (
                    <Link to={`/${slug}/`} className={`${styles.innerContainer} ${styles.anchorStyles}`} key={index}>
                        <div className={styles.card}>
                            <GatsbyImage className={styles.postImage} image={image} alt="" />
                            <div className={styles.taxomonies}>
                                <span className={styles.link}>{name}</span><span> - </span><span className={styles.date}>{date}</span>
                            </div>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                        </div>
                        {/* <Link to={`/${slug}`}>Read more</Link> */}
                    </Link>

                )
            })}
        </div>
    )
}

export default PostCard
