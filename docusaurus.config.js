module.exports = {
  title: "Deepak Vishwakarma",
  tagline: "Programmer, Poet and Enthusiastic Tech lover",
  url: "https://decipher.dev",
  baseUrl: "/",
  favicon: "img/icon_light_y.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
    {
      src:
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7756182462259588",
      async: true,
      crossorigin: "anonymous",
    },
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
              label: "Linkedin",
              href: "https://www.linkedin.com/in/xdeepakv/",
            },
            {
              label: "Medium.com",
              href: "https://medium.com/@deepak-v",
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
        { href: "http://blog.decipher.dev/", label: "Blogs", position: "left" },
        { to: "/docs/resume/", label: "Resume", position: "left" },
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
          sidebarPath: require.resolve("./sidebars.js"),
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
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
