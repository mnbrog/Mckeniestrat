/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `McKenzie Strategies`,
    description: `Counseling, coaching, and creative resources rooted in Alabama with offices in Hoover and Trussville.`,
    author: `McKenzie Strategies`,
    siteUrl: `https://www.mckenziestrategies.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
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
        name: `McKenzie Strategies`,
        short_name: `McKenzie`,
        start_url: `/`,
        background_color: `#0f172a`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
};
