module.exports = {
  title: 'Ampify',
  tagline: 'Identical AMP is now Possible',
  url: 'https://duda-docs.netlify.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'ampify-io', // Usually your GitHub org/user name.
  projectName: 'duda-docs', // Usually your repo name.
  themeConfig: {
    /*algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'YOUR_APP_ID',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },*/
    navbar: {
      title: 'Ampify',
      logo: {
        alt: 'Ampify Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'search',
          position: 'right',
        }],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/amp-html',
            },
            {
              "label": "Slack",
              "href": "https://join.slack.com/t/ampify-dev-plat/shared_invite/zt-dq2lvsyq-XXyQfTIKjk_rnoMb1gHnsA",
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
