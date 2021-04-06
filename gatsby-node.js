/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

// create pages dynamically
// Process to grab createPages. Needs to be Async as it takes time to get.
exports.createPages = async ({ graphql, actions }) => {
    // Destructure to get create pages from action
    const { createPage } = actions
    // Search for something unique as an identifier
    const result = await graphql(`
        query WordPressPosts {
            allWpPost {
            nodes {
                slug
                }
            }
        }      
    `)
    
    result.data.allWpPost.nodes.forEach(post => {
        console.log(post.uri)
        // Function to create pages
        createPage({
          // The path to which the page will be created
          // path: `blog/${blog.frontmatter.slug}/`,
          path: `/${post.slug}`,
          // The template that will be used
          component: path.resolve(`src/templates/post.js`),
          // Passing on information to the page as identifier. 
          context: {
            slug: post.slug,
          },
        })
      })

}