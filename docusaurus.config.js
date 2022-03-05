// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docu',
  tagline: 'Making great products',
  url: 'https://elearninghub.github.io',
  baseUrl: '/Static-Website-Docusaurus/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'elearninghub', // Usually your GitHub org/user name.
  projectName: 'Static-Website-Docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/elearninghub/Static-Website-Docusaurus',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/elearninghub/Static-Website-Docusaurus',
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
      navbar: {
        title: 'eLearningHub',
        logo: {
          alt: 'eLearningHub',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'engineering/index',
            position: 'left',
            label: 'docu',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/elearninghub/Static-Website-Docusaurus',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'docu',
                to: '/docs/engineering/index',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Gitlab',
                href: 'https://github.com/elearninghub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eLearningHub Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
