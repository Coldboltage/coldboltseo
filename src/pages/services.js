import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/services.module.css" 

const Services = () => {
    return (
        <Layout>
            <Seo title="Services" description="All the services that you'll find from ColdboltSEO. Who knows what he'll do next"/>
            <div className={styles.container}>
                <h1>Esports SEO Services</h1>                
                <p className={styles.container}>I wanted to type this to see what happens. It's good craic to see if this works or not :D</p>
                <p>Honestly at this point, it's more I don't know what I want to make at this point. I think this website does what I need and until I have an issue with it, I can maintain this site</p>
            </div>
        </Layout>
    )
}

export default Services
