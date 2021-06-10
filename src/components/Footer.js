import React from 'react'
import * as styles from "../styles/footer.module.css"
import linkList from "../constants/links"
import Navlinks from "../components/Navlinks"
// import socialLinks from "../constants/socialLinks"

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <Navlinks pages={linkList} footer/>
                <footer style={{ marginTop: `2rem`, }}>
                    © {new Date().getFullYear()}, Built with {` `}
                    <a href="https://www.gatsbyjs.com">Gatsby</a>
                </footer>
            </div>
        </div>
    )
}

export default Footer
