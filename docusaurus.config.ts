import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Learn how Carmel works',
  tagline: 'All the technical details, latest news and check out the source code',
  favicon: 'img/favicon.ico',
  url: 'https://docs.carmel.city',
  baseUrl: '/',
  organizationName: 'carmelcity',
  projectName: 'carmelcity.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "main",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    ['@docusaurus/plugin-content-docs', {
      path: 'developers',
      routeBasePath: 'developers',
      sidebarPath: require.resolve('./sidebars.js'),
    }],
    ['@docusaurus/plugin-content-blog', {
      path: 'news',
      routeBasePath: 'news',
    }],
    ['@docusaurus/plugin-client-redirects', {
      redirects: [
        {
          to: '/developers/overview/welcome',
          from: '/developers',
        }
      ]
    }]
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/banner.webp',
    navbar: {
      title: 'Carmel Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'developersSidebar',
          position: 'left',
          label: 'Developers',
        },
        { 
          to: '/news', 
          label: 'News', 
          position: 'left'
        },
        {
          href: 'https://carmel.city',
          label: 'back to carmel.city',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Open Source',
          items: [
            {
              label: 'GitHub Org',
              href: 'https://github.com/carmelcity/',
            },
            {
              label: 'Blockchain System',
              href: 'https://github.com/carmelcity/sys',
            },
            {
              label: 'The Node',
              href: 'https://github.com/carmelcity/node',
            },
            {
              label: 'Main Website',
              href: 'https://github.com/carmelcity/web',
            },
          ],
        }
      ],
      copyright: `Copyright © 2025 I. Dan Calinescu - Licensed under the MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
