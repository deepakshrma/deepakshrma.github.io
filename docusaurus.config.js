const configs = require("./config");
module.exports = {
  title: "Deepak Vishwakarma",
  tagline: "The tagline of my site",
  url: "https://github.com/deepakshrma",
  baseUrl: "/",
  favicon: "img/icon_light_y.png",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deepakshrma.github.io", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    disableDarkMode: false,
    navbar: {
      title: "Deepak Vishwakarma",
      logo: {
        alt: "My Site Logo",
        src: "img/icon_light.png",
      },
      links: [
        { to: "/", label: "Blog", position: "left" },
        {
          href: "https://github.com/deepakshrma/deepakshrma.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          editUrl:
            "https://github.com/deepakshrma/deepakshrma.github.io/edit/master/blog/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma, Inc. Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
