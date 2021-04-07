import React from 'react'
import {Link} from "gatsby"
import * as styles from "../styles/category.module.css"


const Pager = ({pageContext}) => {
    const {previousPagePath, nextPagePath} = pageContext
    console.log(nextPagePath)
    return (
        <div className={styles.pager}>
            {previousPagePath && (
                <div>
                    <span><Link to={previousPagePath}>Previous</Link></span>
                </div>
            )}
            {nextPagePath && (
                <span><Link to={nextPagePath}>Next</Link></span>
            )}
        </div>
    )
}

export default Pager
