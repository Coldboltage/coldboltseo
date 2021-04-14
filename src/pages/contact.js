import React from 'react'
import * as styles from "../styles/contact.module.css"
import Layout from "../components/layout"
import SidebarPosts from "../components/SidebarPosts"
import { Link, graphql } from "gatsby"
import seo from "../components/seo"

const Contact = ({ data }) => {
  const { nodes: posts } = data.allWpPost
  return (
    <Layout>
      <seo title="Contact"></seo>
      <div className={`${styles.container} ${styles.grid} ${styles.grid2}`}>
        <div>
          <h1>Contact me</h1>
          <p>I’m looking for any full time SEO work within Esports but I’m happy to do any SEO consultation part time or as a freelancer. I’m heavily active on Twitter if you wish to contact there.</p>
          <p>Twitter: <a href="https://twitter.com/itscoldbolt">https://twitter.com/itscoldbolt</a></p>
          <p>Discord: Coldbolt#6340</p>
          <p>If you wish to use the contact form below, you can be assured that I’ll follow up with you as soon as possible!</p>
          <div className={styles.form}>
            <form action="https://formspree.io/f/xpzkzywn" method="POST">
              <label className={styles.label} for="name">
                Your name:
              </label>
              <div className={styles.input}>
                <input type="text" name="name" id="name" required></input>
              </div>
              <label for="email" className={styles.label}>
                Your email:
            </label>
              <div className={styles.input}>
                <input type="email" name="email" id="email" required></input>
              </div>
              <label className={styles.label} for="subject" required>
                Subject:
            </label>
              <div className={styles.input}>
                <input type="text" name="subject" id="subject" required></input>
              </div>
              <label for="message" className={styles.label}>
                Your message:
            </label>
            <div className={styles.input}>
                <textarea className={styles.textarea} name="message" id="message" required></textarea>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className={styles.sidebar}>
          <h3>Latest Posts</h3>
          <SidebarPosts posts={posts} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AllWpPosts {
    allWpPost(limit: 5) {
      nodes {
        slug
        title
        categories {
          nodes {
            name
          }
        }
        date(formatString: "Do MMMM YYYY")
      }
    }
  }
`

export default Contact
