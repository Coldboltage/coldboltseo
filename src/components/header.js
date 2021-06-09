import React, { useState } from "react"
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

  const visibleSetting = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 660) {
        return false
      } else {
        return true
      }
    }
  }

  const barsSettings = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 660) {
        return true
      } else {
        return false
      }
    }
  }

  const [visible, setVisible] = useState(visibleSetting())
  const [barsVisible, setBarsVisble] = useState(barsSettings())


  // useEffect(() => {
  //   if (window.innerWidth < 660) {
  //     setVisible(false)
  //     setBarsVisble(true)
  //   } else {
  //     setVisible(true)
  //     setBarsVisble(false)
  //   }
  // }, [])



  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 660) {
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
  // const links = pages.link

  console.log(pages)
  return (
    <header className={styles.headerHeight}>
      <div className={styles.containment}>
        <>
          <Link className={styles.link} to="/" style={{ color: `white`, textDecoration: `none`, }}>
            <StaticImage
              src="../images/coldboltseologo-e1543939940324.png"
              placeholder="dominantColor"
              width={200}
              quality={70}
              formats={["AUTO", "AVIF", "WEBP"]}
              alt="logo"
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
