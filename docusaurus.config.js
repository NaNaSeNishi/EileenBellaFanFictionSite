const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '乃贝同人文site',
  tagline: 'A simple fan fiction site for Bella & Eileen',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo1.png',
  organizationName: 'BellaEileenfanfictionSiteProject', // Usually your GitHub org/user name.
  projectName: 'EileenBellaFanFictionSite', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bella & Eileen Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo1.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '介绍 Introduction',
        },
        {to: '/blog', label: '同人文', position: 'left'},
        {to: '/blog/tags', label: 'View All Tags', position: 'left'},
        {
          href: 'https://www.douban.com/group/728891/',
          label: '豆瓣乃贝组',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Introduction',
          items: [
            {
              label: 'About this project',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '豆瓣乃贝组',
              href: 'https://www.douban.com/group/728891/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contact 联系我',
              href: 'https://weibo.com/u/5554866845',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NaNaSeNishi/EileenBellaFanFictionSite',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Clucky酱. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          // ... configuration object here
          mdxPageComponent: '@theme/MDXPage',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 3,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
