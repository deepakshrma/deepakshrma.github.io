const configs = require("./config");
module.exports = {
  title: "Deepak Vishwakarma",
  tagline: "Programmer, Poet and Enthusiastic Tech lover",
  url: "https://decipher.dev",
  baseUrl: "/",
  favicon: "img/icon_light_y.png",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deepakshrma.github.io", // Usually your repo name.
  ...configs,
  themeConfig: {
    ...configs.themeConfig,
    navbar: {
      title: "Deepak Vishwakarma",
      logo: {
        src: "img/icon_light.png",
      },
      links: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Home",
          position: "left",
        },
        { to: "/blog/", label: "Blogs", position: "left" },
        {
          to: "/docs/resume",
          activeBasePath: "docs",
          label: "Resume",
          position: "left",
        },
        {
          href: "https://github.com/deepakshrma/",
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
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/deepakshrma/deepakshrma.github.io/edit/docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
      {
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          editUrl:
            "https://github.com/deepakshrma/deepakshrma.github.io/edit/docs",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
