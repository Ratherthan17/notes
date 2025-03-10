// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zhang的学习笔记',
  tagline: 'Zhang的学习笔记',
  favicon: 'img/LogoIcon/WebIcon.png',//这个是标签页的图标

  // Set the production url of your site here
  url: 'https://www.zhangyuqi.top',//看下一行
  //当部署到 github pages 上时，用 https://xxx.zhangyuqi.top
  //上传到 main 分支时用 https://www.zhangyuqi.top ，这是我的 vercel 用的域名
  //不用域名是 https://Ratherthan17.github.io

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',//这个不用动//github.io 是 '/notes/' ，zhangyuqi 你个傻帽别再写成 MyNotes 了，可恶

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
      '@docusaurus/preset-classic',
       /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          //breadcrumbs: false,                    
          
          showLastUpdateTime:true,
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
      algolia:{
        // Algolia 提供的应用 ID
        //appId: 'TDHAFYTVF1',
        appId: 'Z7OLUJP2HB',

        //  公开 API 密钥：提交它没有危险
        //apiKey: '05ba287471865c446bb1019bcff3fa5a',
        apiKey: 'c9531c979d75d3987639e43f54257f05',

        indexName: 'ForVercel',//ForGithubPages | ForVercel 

       // position: 'left',
    },

      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Zhang',//改这里，是Mysite
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',//这里是导航栏的logo
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '计算机',//这里是Tutorial
          },
          
          // {
          //   type: 'dropdown',
          //   sidebarId: 'divination',
          //   position: 'right',
          //   label: '玄学',//这里是Tutorial
          //   items: [
          //     {
          //       label: '术数',
          //       type: 'doc',
          //       docId: 'Divination/general',
                
          //     },
          //    /*  {
          //       label: '命理',
          //       type: 'doc',
          //       docId: '',
          //     }, */
          //   ],
          // },

          //{to: '/blog', label: 'Blog', position: 'left'},//这里是Blog
          {
            href: 'https://github.com/ratherthan17/my-website',
            label: 'GitHub',
            position: 'right',
          },

          /* {
            type: 'search',
            position: 'right',
          }, */

        ],

        
        hideOnScroll: true, //若为 true ，文档页面向下滚动时收起顶部导航
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
                {
                  label: 'MDX 官方文档',
                  href: 'https://www.mdxjs.cn/',
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
             
              {
                label: 'React 官方文档',
                href: 'https://zh-hans.react.dev/',
              },
              {
                label: 'tailwindcss 官方文档',
                href: 'https://tailwind.nodejs.cn/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell','bash','jsx','markdown','cpp'],
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
