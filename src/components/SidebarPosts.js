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
                    <div key={index} className={styles.post}>
                        <h5 className={styles.titleLink}>{title}</h5>
                        <div className={styles.taxomonies}>
                            <span><Link className={styles.link} to={`/${slug}`}>{catName}</Link></span><span> - </span><Link className={styles.date} to={`/${slug}`}>{date}</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SidebarPosts
