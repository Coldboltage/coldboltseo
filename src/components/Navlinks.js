import React from 'react'
import { Link } from "gatsby"
import * as styles from "../styles/navLinks.module.css"
import linkList from "../constants/links"

const NavLinks = ({ socialLinks, footer }) => {
    return (
        <div className={`${styles.space} ${footer && (styles.footer)}`}>
            <ul className={styles.list}>
                {linkList.map((link, index) => {
                    const { text, url } = link
                    return (
                        <li className={styles.hello} key={index}>
                            <Link style={{ textDecoration: "none", color: "#333" }} to={url}>{text}</Link>
                        </li>
                    )
                })}
            </ul>
            {/* {socialLinks && <p className={styles.hello}>Hi</p>} */}
            {socialLinks && (
                <ul className={`${styles.list}`} >
                    {socialLinks.map((socialLink) => {
                        return (
                            <li key={socialLink.id}>
                                <a href={socialLink.url} title={socialLink.name}>
                                    {/* <img src={socialLink.icon} alt={socialLink.name}></img> */}
                                    {socialLink.icon}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default NavLinks
