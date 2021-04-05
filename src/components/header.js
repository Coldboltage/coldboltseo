import * as React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../styles/header.module.css"
import NavLinks from "../components/Navlinks"
import { StaticImage } from "gatsby-plugin-image"

const query = graphql `
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
  const data = useStaticQuery(query)
  const {allWpPage: {nodes:pages}} = data
  const links = pages.link

  console.log(pages)
  return (
    <header>
      <div className={styles.containment}>
          <Link className={styles.link} to="/" style={{ color: `white`, textDecoration: `none`, }}>
          <StaticImage 
            src="../images/coldboltseologo-e1543939940324.png"
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
          </Link>
        <NavLinks pages={pages} links={links} />
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
