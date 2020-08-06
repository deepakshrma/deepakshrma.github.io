module.exports = {
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
  ],

  themeConfig: {
    sidebarCollapsible: false,
    prism: {
      defaultLanguage: "ts",
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
  },
};
