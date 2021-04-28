module.exports = {
  siteMetadata: {
    title: `SourceRT GmbH /in_process`,
    description: `Project Staffing, Management and Value in Real-Time `,
    author: `X`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/gallery`,
        name: `gallery`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/blog`,
        name: `blog`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/markdown/projects`,
        name: `projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `YOUR_GOOGLE_ANALYTICS_TRACKING_ID`,
        // Puts tracking script in the head instead of the body
        head: false,
        // Enables Google Optimize using your container Id
        optimizeId: `YOUR_GOOGLE_OPTIMIZE_TRACKING_ID`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        outputStyle: `compressed`,
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `George / გიორგი Davituri`,
        short_name: `George / გიორგი`,
        start_url: `/`,
        display: `standalone`,
        theme_color: `#fff`,
        icon: `static/assets/world-map.png`
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify-cms`
  ]
};
