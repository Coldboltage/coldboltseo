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
                console.log()
                return (
                    <div className={`${styles.card} ${styles.innerContainer}`} key={index}>
                        <div>
                            <Link to={`/${slug}`}>
                                <GatsbyImage className={styles.postImage} image={image} alt="first post" />
                            </Link>
                            <div className={styles.taxomonies}>
                                <span><Link className={styles.link} to={`/${slug}`}>{name}</Link></span><span> - </span><Link className={styles.date} to={`/${name}`}>{date}</Link>
                            </div>
                            <Link className={styles.titleLink} to={`/${slug}`}>
                                <h3 className={styles.title}>{title}</h3>
                            </Link>
                            <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
                        </div>
                        <Link to={`/${slug}`}>Read more</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default PostCard
