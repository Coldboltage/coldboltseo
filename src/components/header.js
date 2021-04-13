import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/header.module.css"
import NavLinks from "../components/Navlinks"
import { StaticImage } from "gatsby-plugin-image"
import socialLinks from "../constants/socialLinks"
import VerticalNavbar from "../components/VericalNavbar"

const query = graphql`
  {
    allWpPost {
      nodes {
        link
      }
    }
    allWpPage {
      nodes {
        title
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [visible, setVisible] = useState(false)
  const [barsVisible, setBarsVisble] = useState(true)

  useEffect(() => {
    if (window.innerWidth < 611) {
      setVisible(false)
      setBarsVisble(true)
    } else {
      setVisible(true)
      setBarsVisble(false)
    }
  }, [])

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 611) {
        setVisible(false)
        setBarsVisble(true)
      } else {
        setVisible(true)
        setBarsVisble(false)
      }
    })
  }

  const data = useStaticQuery(query)
  const { allWpPage: { nodes: pages } } = data
  const links = pages.link

  console.log(pages)
  return (
    <header>
      <div className={styles.containment}>
        <>
          <Link className={styles.link} to="/" style={{ color: `white`, textDecoration: `none`, }}>
            <StaticImage
              src="../images/coldboltseologo-e1543939940324.png" 
              placeholder="blurred"
              quality={50}
              formats={["AUTO", "AVIF", "WEBP"]}
            />
          </Link>
          {barsVisible && <VerticalNavbar />}
        </>
        {visible ? <NavLinks pages={pages} socialLinks={socialLinks} /> : null}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
