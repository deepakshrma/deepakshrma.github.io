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
    googleAnalytics: {
      trackingID: "UA-172955705-1",
    },
    navbar: {
      title: "Deepak Vishwakarma",
      logo: {
        src: "img/icon_light.png",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Home",
          position: "left",
        },
        { to: "/blog/", label: "Blogs", position: "left" },
        { to: "/calculators/", label: "Calculators", position: "left" },
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
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
          },
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};
