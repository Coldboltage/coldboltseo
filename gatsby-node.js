/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { paginate } = require('gatsby-awesome-pagination');


// create pages dynamically
// Process to grab createPages. Needs to be Async as it takes time to get.
exports.createPages = async ({ graphql, actions }) => {
    // Destructure to get create pages from action
    const { createPage, createRedirect } = actions
    // Search for something unique as an identifier
    const result = await graphql(`
      query WordPressPosts {
        blogPosts:allWpPost(
          filter: {categories: {nodes: {elemMatch: {slug: {eq: "blog"}}}}}
        ) {
          nodes {
            slug
          }
        }
        esportseo:allWpPost(
          filter: {categories: {nodes: {elemMatch: {slug: {eq: "esports-seo"}}}}}
        ) {
          nodes {
            slug
          }
        }
        allWpPost {
          nodes {
            slug
          }
        }
        allWpCategory {
          nodes {
            slug
          }
        }
      }      
    `)
    
    result.data.allWpPost.nodes.forEach(post => {
        // Function to create pages
        createPage({
          // The path to which the page will be created
          // path: `blog/${blog.frontmatter.slug}/`,
          path: `/${post.slug}`,
          // The template that will be used
          component: path.resolve(`src/templates/post.js`),
          // Passing on information to the page as identifier. 
          context: {
            slugPost: post.slug,
          },
        })
      })

      // result.data.allWpCategory.nodes.forEach(category => {
      //   // Function to create pages
      //   createPage({
      //     // The path to which the page will be created
      //     // path: `blog/${blog.frontmatter.slug}/`,
      //     path: `/${category.slug}`,
      //     // The template that will be used
      //     component: path.resolve(`src/templates/category.js`),
      //     // Passing on information to the page as identifier. 
      //     context: {
      //       slugCat: category.slug,
      //     },
      //   })
      // })

      paginate({
        createPage,
        items: result.data.blogPosts.nodes,
        itemsPerPage: 6,
        pathPrefix: `/blog`,
        component: path.resolve(`src/templates/blog.js`)
      })

      paginate({
        createPage,
        items: result.data.esportseo.nodes,
        itemsPerPage: 6,
        pathPrefix: `/esports-seo`,
        component: path.resolve(`src/templates/category.js`)
      })

      // Create redirects
      createRedirect({ fromPath: "/category/blog/", toPath: "/blog/", isPermanent: true })
      createRedirect({ fromPath: "/category/esports-seo/", toPath: "/esports-seo/", isPermanent: true })
}