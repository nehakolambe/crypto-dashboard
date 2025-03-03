module.exports = {
  title: 'Crypto Dashboard Docs',
  tagline: 'Documentation for Crypto Dashboard',
  url: 'http://localhost:3000',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'crypto-dashboard',
  trailingSlash: false,
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Ensures docs load at /docs/ without homepage
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
