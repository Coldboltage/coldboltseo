import React from 'react'
import {Link} from "gatsby"
import * as styles from "../styles/navLinks.module.css"
import linkList from "../constants/links"

const NavLinks = ({ pages, links }) => {
    return (
        <div className={styles.space}>
            <ul className={styles.list}>
                {linkList.map((link, index) => {
                    const {text, url} = link
                    return (
                        <li className={styles.hello}>
                            <Link style={{textDecoration: "none", color: "#333"}} to={url}>{text}</Link>
                        </li>
                    )
                })}
            </ul>
            {links && <p className={styles.hello}>Hi</p>}
        </div>
    )
}

export default NavLinks
