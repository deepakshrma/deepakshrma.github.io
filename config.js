module.exports = {
  plugins: [require.resolve("@docusaurus/plugin-sitemap")],
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Open+Sans&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    sidebarCollapsible: false,
    disableDarkMode: true,
    prism: {
      defaultLanguage: "ts",
    },
    gtag: {
      trackingID: "UA-141789564-1",
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: "Profile",
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
          title: "Community",
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
      ],
      logo: {
        alt: "Decipher.dev",
        src: "/img/logo_decipher.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Deepak Vishwakarma`,
    },
  },
  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-live-codeblock"],
};
