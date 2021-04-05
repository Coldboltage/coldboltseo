import React from 'react'
import * as styles from "../styles/navLinks.module.css"

const NavLinks = ({ pages }) => {
    const links = true;
    return (
        <div className={styles.space}>
            <ul className={styles.list}>
                {pages.map((page, index) => {
                    const {title} = page
                    console.log(page)
                    return (
                        <li classname={styles.hello}>{title}</li>
                    )
                })}
            </ul>
            {links && <p className={styles.hello}>Hi</p>}
        </div>
    )
}

export default NavLinks
