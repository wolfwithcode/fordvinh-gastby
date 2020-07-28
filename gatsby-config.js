module.exports = {
  siteMetadata: {
    title: `Đại lý Ford Vinh`,
    description: `Vinh Ford - Đại lý uỷ quyền chính thức từ Ford Việt Nam.`,
    keywords: `Ford Focus, Ecosport, Everest, Explorer, Ranger, Transit, Ranger Raptor`,
    url: `https://www.xefordvinh.com.vn/`,
    author: `@anhld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-catch-links`,{
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
