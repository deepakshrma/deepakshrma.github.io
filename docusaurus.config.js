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
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Medium.com',
              href: 'https://medium.com/@deepak_v',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/channels/@deepakv',
            },
            {
              label: 'Linkdin',
              href: 'https://www.linkedin.com/in/xdeepakv/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/deepakshrma/deepakshrma.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma, Inc. Built with Docusaurus.`,
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
