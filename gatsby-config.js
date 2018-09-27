require('dotenv').config();
const SPACE_ID = process.env.SPACE_ID;
const DELIVERY_API_KEY = process.env.DELIVERY_API_KEY;

module.exports = {
    siteMetadata: {
        title: `Carrie Carter Codes`,
        author: `@pdxcarrie`
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: SPACE_ID,
                accessToken: DELIVERY_API_KEY,
            },
        },
        // For PREVIEW API (includes contentful drafts)
        // {
        //   resolve: `gatsby-source-contentful`,
        //   options: {
        //     spaceId: SPACE_ID,
        //     accessToken: PREVIEW_API_KEY,
        //     host: `preview.contentful.com`,
        //   },
        // },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
        `gatsby-plugin-react-helmet`
    ]
}