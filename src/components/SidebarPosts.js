import React from 'react'
import { Link } from "gatsby"
import * as styles from "../styles/sidebarPost.module.css"

const SidebarPosts = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) => {
                const { slug, title, date, categories } = post
                const catName = categories.nodes[0].name
                console.log(catName)
                return (
                    <Link to={`/${slug}`} className={styles.anchorStyles}>
                        <div key={index} className={styles.post}>
                            <h5 className={styles.titleLink}>{title}</h5>
                            <div className={styles.taxomonies}>
                                <span className={styles.link}>{catName}</span><span> - </span><span className={styles.date} to={`/${slug}`}>{date}</span>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default SidebarPosts
