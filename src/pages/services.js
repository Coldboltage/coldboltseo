import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../styles/services.module.css" 

const Services = () => {
    return (
        <Layout>
            <Seo title="Services" description="All the services that you'll find from ColdboltSEO. Who knows what he'll do next"/>
            <div className={styles.container}>
                <h1>Resources to help with SEO</h1>
                <h2 style={{fontSize: "20px"}}>Step away from Esports SEO as a pure play job</h2>
                <p>This part of the website was meant for me to advertise my services to you. Unfortunately I believe that the market of SEO for Esports is not fully ready as search engines haven't embraced or understood yet. This creates a lot of problems for an SEO as to try to sell a service is now unethicial. The best that I can do is to give everyone, resources to help follow best SEO practises. In turn, this will help build the best type of website for your users and in turn, build a fantastic business. As much as I would love to use SEO in Esports as a medium for a self sustained job, it is too coinflip for me to worry on Google and other search engines, understanding the semantics of esports right now. I would hope for the following;
                </p>
                <ul>
                    <li>Esports to be better understood by search engines</li>
                    <li>Current schema to take into account Esports</li>
                    <li>A specific schema which was designed for gaming</li>
                    <li>Schema which is made for esports and the types of games involved</li>
                </ul>
                <p>Google and other search engines will proclaim they already understood many of these subjects. I believe internally, they understands esports very well. This however is not reflected well with their search engines. As new web technologies make themselves available, it seems to be that Google hasn't done a good job understanding esports terms. This is best seen with FNATIC's new site. Using NextJS, it is a fast, responsive site which Google should absolutely love. Most of the best practises which is championed by SEO experts have been applied for the most part. There is little reason why search engines have little understanding of the website. Some pages work well but for pages like the roster pages and player pages, this is not the case. This makes it very hard to be an Esports SEO, which I've labelled myself. </p>
                <h2 style={{fontSize: "20px"}}>What will happen to ColdboltSEO?</h2>
                <p>Honestly, I'm not too sure. I want to make sure that I'm kept in the loop when it comes to all things SEO. I always want to help people out when it comes to showcasing their websites. The only issue I have is, this is an esports SEO website and as it is right now, I think it's best to move to another domain and build out another website from there. That's probably the best thing I can do for now. I'll post more about that in the future. </p>
                <p>I do love GatsbyJS and using GraphQL. I learnt though now months ago, that I'm no where near as good as understanding a query language than I should. It's a good time to learn NextJS. I'm still to explore it but there's no doubt, it'll not be as good as GatsbyJS when it comes to performance. I'm still to learn where the uses of NextJS will come over GatsbyJS but for the most part, I don't think I need to care. We'll see what the future has to hold for me. I'll keep up with this blog but this site, ColdboltSEO, will stay up as a GatsbyJS website. We shall see what the future holds for this website. I still like the competitive nature of SEO in the end of the day.</p>

            </div>
        </Layout>
    )
}

export default Services
