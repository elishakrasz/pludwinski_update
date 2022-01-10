module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "pludwinski",
  },
  plugins: ["gatsby-plugin-postcss",
  `gatsby-plugin-styled-components`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-webfonts`,
    options: {
      fonts: {
        google: [
          {
            family: "Roboto",
            variants: ["100", "400", "700"],
          },
          {
            family: "Raleway",
            variants: ["100"],
          },
          { family: "Open Sans" },
        ],
      },
    },
  },
],
  
};
