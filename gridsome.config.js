// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Galaxy Community Hub: The Squeakquel',
  siteDescription: 'Galaxy Community Hub - Gridsome version',
  templates: {
    Post: '/:category/:title',
    Singlet: '/:path',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/posts/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/singlets/**/*.md',
        typeName: 'Singlet',
        route: '/singlets/:slug',
      }
    },
  ],
  transformers: {
    // Add markdown support to all filesystem sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [],
    }
  },
}
