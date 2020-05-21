module.exports = {
  title: 'Deepak Vishwakarma',
  tagline: 'The tagline of my site',
  url: 'https://github.com/deepakshrma',
  baseUrl: '/',
  favicon: 'img/icon_light_y.png',
  organizationName: 'deepakshrma', // Usually your GitHub org/user name.
  projectName: 'deepakshrma.github.io', // Usually your repo name.
  themeConfig: {
    disableDarkMode: false,
    navbar: {
      title: 'Deepak Vishwakarma',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon_light.png',
      },
      links: [
        {to: '/', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/deepakshrma/deepakshrma.github.io',
          label: 'GitHub',
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
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/deepakshrma/deepakshrma.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // It is recommended to set document id as docs home page (`docs/` path).
        //   homePageId: 'doc1',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/deepakshrma/deepakshrma.github.io/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
