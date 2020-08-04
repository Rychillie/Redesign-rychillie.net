module.exports = {
  siteMetadata: {
    title: `Rychillie`,
    description: `Brazilian Frontend developer sharing good stuff`,
    author: `@rychillie`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rychillie`,
        short_name: `Rychillie`,
        start_url: `/`,
        background_color: `#161616`,
        theme_color: `#161616`,
        display: `minimal-ui`,
        icon: `src/images/unicorn.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
