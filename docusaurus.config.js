// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zhang的知识库',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.zhangyuqi.top/',
  //当部署到 github pages 上时，用 xxx.zhangyuqi.top
  //上传到 main 分支时用 www.zhangyuqi.top ，这是我的 vercel 用的域名

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ratherthan17', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          //breadcrumbs: false,
          
        },

        blog:false,//禁用blog插件
        /* blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        }, */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zhang',//改这里，是Mysite
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '计算机',//这里是Tutorial
          },
          /* {
            type: 'docSidebar',
            sidebarId: 'divination',
            position: 'right',
            label: '术数',//这里是Tutorial
          }, */
          //{to: '/blog', label: 'Blog', position: 'left'},//这里是Blog
          {
            href: 'https://github.com/ratherthan17/my-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      //设置目录标题级别
      tableOfContents:
      {
        minHeadingLevel:2,
        maxHeadingLevel:4,//设置显示h2-h4
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记',
            items: [
              {
                label: '前言',
                to: '/docs/intro',
              },
            ],
          },
          /*  {
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
           }, */
          {
            title: '链接',
            items:
              [
                {
                  label: 'Docusaurus官方文档',
                  href: 'https://docusaurus.io/zh-CN/',
                },
                {
                  label: 'Markdown官方文档',
                  href: 'https://markdown.com.cn/',
                },
              ],
          },
          {
            title: '更多',
            items: [
              /* {
                label: 'Blog',
                to: '/blog',
              }, */
              {
                label: '我的GitHub',
                href: 'https://github.com/Ratherthan17?tab=repositories',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          //autoCollapseCategories: true,
        },
      },
    }),

  };

module.exports = config;
