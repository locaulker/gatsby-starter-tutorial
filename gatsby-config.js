/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Starter Tutorial',
    description: 'Some description about the site',
    author: '@johndoe',
    data: { name: 'John', age: 25, },
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ],
}
