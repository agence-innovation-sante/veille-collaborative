// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Veille collaborative AIS',
  tagline: "Veille collaborative de l'Agence de l'innovation en santé",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://agence-innovation-sante.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/veille-collaborative/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'agence-innovation-sante', // Usually your GitHub org/user name.
  projectName: 'veille-collaborative', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl:
            'https://github.com/agence-innovation-sante/veille-collaborative',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      // Replace with your project's social card
      image: 'img/social-card-ais.jpg',
      navbar: {
        logo: {
          alt: 'AIS Logo',
          src: 'img/logo-ais.png',
          srcDark: 'img/logo-ais-blanc.png'
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'veilleSidebar',
            position: 'left',
            label: 'Veille collaborative',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/agence-innovation-sante/veille-collaborative',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `© ${new Date().getFullYear()} Agence de l'innovation en santé`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
