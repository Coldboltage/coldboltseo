import React, {useState} from 'react'
import { Link } from "gatsby"
import * as styles from "../styles/VerticalSidebar.module.css"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import links from "../constants/links"

const VericalNavbar = () => {
    const [ sidebar, setSidebar] = useState(false);
    console.log(sidebar)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div onClick={(e) => {
            if(e.target.localName === "div" || e.target.localName === "li") {
                setSidebar()
            } 
        }}>
            <div className={styles.navbar}>
                <Link to="#" className={styles.menuBars} title="Vertical Navbar">
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <div className={sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                <ul className={`${styles.navMenuItems}`}>
                    <li className={`${styles.navbarToggle} ${styles.link}`}>
                        <Link to="#" className={styles.menuBars} onClick={showSidebar}>
                            <IoClose />
                        </Link>
                    </li>
                    {links.map((link, index) => {
                        
                        return(
                            <li key={index} className={styles.link}>
                                <Link className={styles.link} to={link.url}>{link.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}

export default VericalNavbar
