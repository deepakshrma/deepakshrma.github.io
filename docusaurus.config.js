module.exports = {
  title: "Deepak Vishwakarma",
  tagline: "Programmer, Poet and Enthusiastic Tech lover",
  url: "https://decipher.dev",
  baseUrl: "/",
  favicon: "img/icon_light_y.png",
  organizationName: "deepakshrma", // Usually your GitHub org/user name.
  projectName: "deepakshrma.github.io", // Usually your repo name.
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
      type: "text/css",
    },
  ],
  scripts: [
    "https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js",
    // "https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js",
    "https://www.gstatic.com/firebasejs/7.17.1/firebase-database.js",
    "https://www.powr.io/powr.js?platform=html",
  ],
  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      defaultLanguage: "ts",
    },
    algolia: {
      apiKey: "e71b47af92b1daef0e43bbbfa2b4a70a",
      indexName: "decipher_dev",
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: "Follow me",
          items: [
            {
              label: "Linkdin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
            {
              label: "Medium.com",
              href: "https://medium.com/@deepak_v",
            },
            {
              label: "Discord",
              href: "https://discord.com/channels/@deepakv",
            },
          ],
        },
        {
          title: "Friend with me",
          items: [
            { label: "Twitter", href: "https://twitter.com/nalayakshrma" },
            {
              label: "Instagram",
              href: "https://www.instagram.com/nalayaksharma_poetry/",
            },
            {
              label: "Unsplash",
              href: "https://unsplash.com/@deepak_v",
            },
          ],
        },
        {
          title: "Contact me",
          items: [
            {
              label: "Email me",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
          ],
        },
      ],
      // logo: {
      //   alt: "Decipher.dev",
      //   src: "/img/logo_decipher.png",
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
    },
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
