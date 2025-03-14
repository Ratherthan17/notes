/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    //'test',
    /* {
      type: 'autogenerated',
      //label: 'Tutorial',
      //items: ['tutorial-basics/create-a-document'],
      //items: ['tutorial-basics/.'],
      dirName: 'tutorial-basics/.',
    }, */
    //{type: 'autogenerated', dirName: '.'},

    /*----------------git 学习-----------------*/
    {
      type: 'category',
      label: 'Git 学习',
      items:
        [
          'GitStudy/GitStudy',
          'GitStudy/Failed443',
          {
            type: 'category',
            label: '遇到的错误',
            items:
              [
                'GitStudy/GitError/PushError',
              ],
          },
        ]
    },


    /*----------------单片机学习-------------------*/
    /* {
      type: 'category',
      label: '单片机学习',
      items:
        [
          {
            type: 'category',
            label: '遇到的错误',
            items:
              [
                'SinglechipStudy/Error/ProteusCrackFailure',
                'SinglechipStudy/Error/Keil5SyntaxError Near',
              ]
          }
        ]
    }, */


    /*----------------软件-----------------*/
    {
      type: 'category',
      label: '软件',
      items:
        [
          //'Software/SoftwareLinks',

          /*--------------------VSCode-------------------*/
          {
            type: 'category',
            label: 'VSCode',
            items:
              [
                'Software/VSCode/OpenWithVSCode',

              ]
          },

        ]
    },

    /*----------------Win10----------------*/
    {
      type: 'category',
      label: 'Windows系统',
      items:
        [
          /*--------------延长暂停更新天数------------------*/
          'Win10/DelayUpdate',
          /* {
            type:'category',
            label:'延长暂停更新天数',
           // 'Win10/DelayUpdate/DelayUpdate',
            items:['Win10/DelayUpdate'],

          } */


          
          /*----------------重装系统-------------*/
          {
            type: 'category',
            label: '重装系统',
            items:
              [
                'Win10/ReinstallWin10/ReinstallWin10',
                'Win10/ReinstallWin10/ReinstallWin11',
                'Win10/ReinstallWin10/MigrateUsers',
              ],

          },

        ]
    },


    /*----------------网站-----------------*/
    {
      type: 'category',
      label: '网站建设',
      /* link: {
        type: 'generated-index',
        title: 'Docusaurus 网站建设',
        //description: '学习最重要的 Docusaurus 概念!',
        slug: '/category/docusaurus-guides',
        keywords: ['guides'],
        image: '/img/docusaurus.png',
      }, */
      items:
        [
          'MyWebsite/StudyBuildWebsite',
          //'MyWebsite/BuildWebsite',
          
          {
            type: 'category',
            label: '添加功能',
            items:
              [
                'MyWebsite/AddFunctions/AddAlgoliaDocSearch',
              ]
          },

          {
            type: 'category',
            label: '修改网站样式',
            items:
            [
              'MyWebsite/ModifyTheme/ModifyTheme',
            ]
          },
          
          {
            type: 'category',
            label: '遇到的错误',
            items:
              [
                'MyWebsite/WebsiteError/WebCloneError',
                'MyWebsite/WebsiteError/TaoBaoNpmOutOfDate'
              ]
          },
          //'MyWebsite/Sidebar',
        ],
    },
  ],

  // divination:[
  //   'Divination/general',
  // {
  //   type: 'category',
  //   label: '大六壬',
  //   items:
  //     [
  //       'Divination/DaLiuRen/DaLiuRen'
  //     ],
  // },
  // {
  //   type: 'category',
  //   label: '奇门遁甲',
  //   items:
  //     [
  //       'Divination/QiMenDunJia/QiMenDunJia'
  //     ],
  // },
  // ]


};

module.exports = sidebars;
