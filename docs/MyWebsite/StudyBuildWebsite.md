# 用Docusaurus和Github搭建静态网站

---

### 我搭建时的环境

```
win10
Node.js v18.18.0
npm 9.8.1
yarn 1.22.19

2023年10月7日
```
---

## 一、下载Node.js

### · [Node.js官网](https://nodejs.org/zh-cn/download)

![Node.js官网](../../static/img/GenerateSite/Preparation/DownloadNodejs.png)

:::caution注意
- Node.js得是16.14及以上的版本，安装好后，可以在命令行输入`node -v`敲回车查看安的版本。
- Node.js只支持Windows8.1及以上，Windows7不能用。原因是node.js的版本太高了，v12.16.2以上版本不支持win7系统，[可以下载12.16.2及以下的版本](https://nodejs.org/dist/v12.16.2/)[[1]](https://blog.csdn.net/weixin_37254196/article/details/109713817)。（好了，我在win7上试了试，下载了低版本的，创建站点时会出错）
:::

- 安装yarn
  
```bash
npm install -global yarn
yarn config set registry https://registry.npm.taobao.org/ # 使用淘宝维护的npm镜像源[2]
```

---

## 二、创建本地站点
### 1. 打开命令行窗口  
- 找个地方新建一个文件夹，点进去（这些文件、文件夹的名字最好用英文名，不然可能会出问题）。  
点一下地址栏，输入cmd，然后回车——在当前目录下打开命令行窗口  

![Alt text](../../static/img/GenerateSite/Preparation/AddressBar.png)
![Alt text](../../static/img/GenerateSite/Preparation/Cmd.png)
![Alt text](../../static/img/GenerateSite/Preparation/CMD2.png)

### 2. 输入命令创建站点

```bash
npx create-docusaurus@latest my-website classic
```
:::tip提示
这个"my-website"可以自由命名，"classic"是选用经典模板进行创建
:::

- 下面是创建成功的图片
  
![Alt text](../../static/img/GenerateSite/Preparation/CreatedSuccessfully.png)

- 最下面有提示，输入

```bash
cd my-website
npm start
```
![Alt text](../../static/img/GenerateSite/Preparation/OpenTheSite.png)
![Alt text](../../static/img/GenerateSite/Preparation/OpenTheSite2.png)

- 它会有一个绿色的条，等条走完了，会自动打开一个 http://localhost:3000 的网站，这个网站和官方文档 [5-minute tutorial](https://tutorial.docusaurus.io/) 网站一模一样，因为创建时用的是经典模板

![Alt text](../../static/img/GenerateSite/Preparation/TheSite.png)
![Alt text](../../static/img/GenerateSite/Preparation/TheDocs.png)
:::caution注意
要想在浏览器里看创建的网站，**就必须得让之前输入`npm start`的控制台窗口运行着**，要是把它关了，网站就打不开了。
:::

- 下面是创建网站后，文件资源管理器中的文件  
  
![Alt text](../../static/img/GenerateSite/Preparation/Docs.png)


---

## 三、将本地站点发布到github pages

### 1. 在GitHub上新建github.io库

- 在GitHub上新建一个名为   你的账户名.github.io  的仓库

![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/UserGithubIo.png)

- 进入仓库，点击settings -> pages -> Branch下边的选项选成main，右边是/(root) -> save
  
![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/IOPages.png)

- 等一会，若上面出现："Your site is live at https://你的用户名.github.io/"，就说明网站创建好了。  
  可以点一下右边的`Visit site`或者在浏览器的地址栏里输入`你的用户名.github.io`回车，就可以看到创建的网站

![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/SiteCreated.png)
![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/TheIOSite.png)

- 这里只有一个Readme文件的时候，打开网址会显示Readme里的内容，就是上面那张显示"个人主页"的图片

![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/IO.png)
- 而若我创建了`index.html`文件，则会显示index里面的内容

![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/index.png)

- 还可以创建更多的`.html`文件，然后在 io 后面加上"/文件名"，就可以访问到别的网页了

![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/IO2.png)
  ![Alt text](../../static/img/GenerateSite/Preparation/GithubIO/TheSecondPage.png)

- 实际上如果你不嫌麻烦的话，已经可以通过写html文件来保存笔记了，想看的时候就在浏览器里输入"你的用户名.github.io/"加记笔记的那个文件名，而上面的Nodejs啊、创建Docusaurus本地站点也就不用弄了。  
 但是，我觉得用Docusaurus这样更方便的工具做的话不仅省事，而且用他们的模板做出来的还好看。  
  此外，我一个现在还不会前端的人，都能用它做出这个网站来，想必你若会的话，应该更轻松吧。

### 2. 新建一个专门用来存放笔记的库
- 我新建了一个MyNotes库，用来演示
  
![Alt text](../../static/img/GenerateSite/ForBuild/MyNotes.png)
:::note备注
 这一步，你也可以不用跟着做，而是直接把构建出来的，你的"my-website"上传到  你的账户名.github.io  库里。  
  我只是觉得这样会比较乱？我也不知道，反正我想还是分门别类一下的好，记笔记的网站放在一个notes库里，将来要是又有了其他网站，A网站的，就放到A库里；B网站的，就放到B库里......这样是不是更清晰一些？  
  至于  账户名.github.io  就让它干干净净的当作一个个人主页吧！
:::

- [官方文档](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)里说要用到两个分支（Main和gh-pages），Main用来存放源文件，gh-pages用来存放部署后的文件

![Alt text](../../static/img/GenerateSite/ForBuild/Office1.png)
![Alt text](../../static/img/GenerateSite/ForBuild/TwoBranches.png)
- 所以再新建一个gh-pages分支
  
![Alt text](../../static/img/GenerateSite/ForBuild/gh-pages.png)

- 然后和配置  你的用户名.github.io  网页时的操作一样，不过Branch选择gh-pages

![Alt text](../../static/img/GenerateSite/ForBuild/MyNotesSite0.png)




### 3. 修改docusaurus相关配置文件
- 打开之前创建的"my-website"里的`docusaurus.config.js`文件

![Alt text](../../static/img/GenerateSite/ForBuild/OpenTheConfigFile.png)
- 按照[官方文档docusaurus.config.js settings](https://docusaurus.io/zh-CN/docs/deployment#deploying-to-github-pages)这里和下面的示例所说，总共要修改四处、添加两句


![Alt text](../../static/img/GenerateSite/ForBuild/Official2.png)
![Alt text](../../static/img/GenerateSite/ForBuild/official3.png)
![Alt text](../../static/img/GenerateSite/ForBuild/WhereToModify.png)

#### 步骤：
1. 把url修改为'https://你的用户名.github.io'
2. baseUrl修改为'/你要存放源文件的库/'
3. organizationName修改为'你的GitHub用户名'
4. projectName修改为'你要存放源文件的库'  //(注释)和第2条一样，但是去掉两个'/'
5. 添加一行 `deploymentBranch: 'gh-pages',`  
6. 添加一行 `trailingSlash: false,`  
7. Ctrl + S 保存退出

- 以我的为例，修改完后是这样的，其中打√的是修改参数的，画⭕的是添加的
  
![Alt text](../../static/img/GenerateSite/ForBuild/ModifyTheConfigjs.png)

- 可以在官方文档的API->docusaurus.config.js一节里看到
`https://Ratherthan17.github.io` 就是docusaurus配置文件中的url  
`/MyNotes/`  就是baseUrl

![Alt text](../../static/img/GenerateSite/ForBuild/TheURLAndBaseURL.png)  

- 其他几个修改或添加的也能在这一节里找到解释

- 官方建议我们在static文件夹下建一个扩展名为".nojekyll"的空文件

![Alt text](../../static/img/GenerateSite/ForBuild/CreateNojekyell1.png)

- 打开你创建的 my-website 文件夹，再打开static

![Alt text](../../static/img/GenerateSite/ForBuild/CreateNojekyell2.png)

- 这里有个奇怪的地方，这个站点是我为了写这个笔记新建出来的，打开static后却发现已经有一个`.nojekyll`空文件了，但我记得当初我第一次创建成功站点的时候是没有的，是我自己新建的。  
![Alt text](../../static/img/GenerateSite/ForBuild/Strange1.png)

  我又新建了一个站点，发现这次同样有`.nojekyll`空文件
![Alt text](../../static/img/GenerateSite/ForBuild/Strange2.png)

  此外我发现，除了几个文件夹的创建时间 符合我创建新站点成功的时间外（2023/10/14），其他几个文件显示的都是(2023/10/5 13:59)。 
![Alt text](../../static/img/GenerateSite/ForBuild/Strange3.png) 
  可恶，那时候我干了啥我忘了。  
  总之，要是你的static下有这个文件就不用管了，要是没有就新建一个文本文档，然后把名字删了、再把扩展名改成`.nojekell`


### 4. 把网站部署到 GitHub Pages 上
 ![Alt text](../../static/img/GenerateSite/ForBuild/DeployTogh-pages.png)
- 直接复制
  
 ```bash
 cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
 ```

 按照上面 “二、创建本地站点” 写的那样打开控制台，`Ctrl + V` 粘贴
 ![Alt text](../../static/img/GenerateSite/ForBuild/DeployTogh-pages2.png)
 把"<GITHUB_USERNAME>"改成你GitHub的用户名，然后回车
 ![Alt text](../../static/img/GenerateSite/ForBuild/DeployTogh-pages3.png)
 接着会开始部署
 ![Alt text](../../static/img/GenerateSite/ForBuild/StartDeploy.png)
 部署成功后，就可以打开浏览器，输入“你的用户名.github.io/你部署的仓库名”，来查看你的网站了
 ![Alt text](../../static/img/GenerateSite/ForBuild/Done.png)
 ![Alt text](../../static/img/GenerateSite/ForBuild/OpenTheDoneSite1.png)
 ![Alt text](../../static/img/GenerateSite/ForBuild/OpenTheDoneSite2.png)
 注意：虽然我的用户名和仓库名首字母都是大写的，但是域名中用户名却是小写的。  
   另外仓库名必须和你GitHub上的仓库名一致，这里我把“MyNotes”写成小写的 "mynotes"，打开的是404
 ![Alt text](../../static/img/GenerateSite/ForBuild/OpenTheDoneSite3.png)
 可以看一下settings->pages 中的网址域名，用户名就是小写的，不过我试了试，大写也没事儿
 ![Alt text](../../static/img/GenerateSite/ForBuild/SettingsPages.png)

### 5. 其他一些事情
1. 我当初试了试，看看能不能不创建 用户名.github.io 库，而是直接用一个别的库点击 GitHub Pages 创建站点，结果不行。  
可以看一下 [GitHub 文档][a]，[如何拥有多个GitHub Pages][b] 和 [利用Github实现(多个)个人网站][c]。  
用户名.github.io 库是用户站点；之后的 MyNotes 仓库创建的是项目站点，必须得在 **用户名.github.io 库存在**的前提下，才能创建成功。

1. 运行部署命令后，会在 my-website 下创建一个 bulid 文件夹，里面存放着构建出来的html文件
![Alt text](../../static/img/GenerateSite/ForBuild/end1.png)
  ![Alt text](../../static/img/GenerateSite/ForBuild/end2.png)
  部署到 gh-pages 分支的就是这些文件
  ![Alt text](../../static/img/GenerateSite/ForBuild/Branch1.png)
  这些html文件在文件夹里直接打开是这样的，有问题
  ![Alt text](../../static/img/GenerateSite/ForBuild/end3.png)
  但是用 用户名.github.io/仓库名/文件名 打开就没问题
  ![Alt text](../../static/img/GenerateSite/ForBuild/end4.png)

1. main分支里这时还是空的，可以把网站源代码上传上来，方面管理
  ![Alt text](../../static/img/GenerateSite/ForBuild/Branch2.png)
1. 控制台有一个黄条一直显示99%，不知道是干啥的，我最后把控制台关了，也没发现出什么问题
  ![Alt text](../../static/img/GenerateSite/ForBuild/99.png)


---

## 四、 当初遇到的错误
- 最开始我用官方文档"Fast Track"中的这个命令创建站点老出错  
 ```bash
 npx create-docusaurus@latest my-website classic
 ```
![Alt text](../../static/img/GenerateSite/Preparation/FastTrack.png)

 最后偶然发现他们5-minute tutorial教程里的命令能用

 ![Alt text](../../static/img/GenerateSite/Preparation/5min.png)
 ```bash
 npm init docusaurus@latest my-website classic
 ```

  现在这个网站就是用“5-minute tutorial”中的命令创建出来的那个。之后我在写这个笔记的时候，为了截出错图片，又用"Fast Track"中的命令创了一次，结果成功了，真是莫名其妙！  （既然成功了说明没问题，我就把第二步， “二、创建本地站点”中的命令改成了"Fast Track"的）

- 这是我用"Fast Track"中的指令创建站点时报的错
```
[INFO] Creating new Docusaurus project...
[INFO] Installing dependencies with npm...
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: my-website@0.0.0
npm ERR! Found: react@undefined
npm ERR! node_modules/react
npm ERR!   react@"^17.0.2" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@">=0.14.9" from prism-react-renderer@1.3.5
npm ERR! node_modules/prism-react-renderer
npm ERR!   prism-react-renderer@"^1.3.5" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR!
npm ERR! For a full report see:
npm ERR! C:\Users\Zhang\AppData\Local\npm-cache\_logs\2023-10-06T05_22_12_008Z-eresolve-report.txt

npm ERR! A complete log of this run can be found in: C:\Users\Zhang\AppData\Local\npm-cache\_logs\2023-10-06T05_22_12_008Z-debug-0.log
[ERROR] Dependency installation failed.
[INFO] The site directory has already been created, and you can retry by typing:

  `cd my-website`
  `npm install`
```

---

## 参考资料
>- ⭐[官方文档](https://docusaurus.io/zh-CN/)
>- ⭐[实战：构建以内容为核心的开源文档网站及博客(docusaurus)-2022.9.23(超详细)](https://zhuanlan.zhihu.com/p/567578277)  
>- ⭐[docusaurus部署Github Pages搭建个人博客](https://blog.csdn.net/weixin_44240478/article/details/124883373)  
>- [新手5分钟纯免费搭建个人网站，github的申请与page静态页面的设置](https://www.bilibili.com/video/BV1T341167xo/?spm_id_from=333.337.search-card.all.click&vd_source=4f65863adf19c12522e7026402e62e53)  
>- [Github使用教程-黑马程序员--P10 Github Pages搭建网站](https://www.bilibili.com/video/BV1st411r7Sj?p=10&vd_source=4f65863adf19c12522e7026402e62e53)  
>- [【JAMSTACK】使用 Docusaurus 静态网站生成器搭建个人博客](https://www.bilibili.com/video/BV1uE411x7mE/?spm_id_from=333.788&vd_source=4f65863adf19c12522e7026402e62e53)  
>- [【JAMSTACK】部署 Docusaurus 搭建的个人博客](https://www.bilibili.com/video/BV11E411M7WL/?spm_id_from=333.337.search-card.all.click&vd_source=4f65863adf19c12522e7026402e62e53)
>- [Docusaurus 教程 - 在 20 分钟内构建和部署站点](https://www.bilibili.com/video/BV1Ge4y1D7Y8/?spm_id_from=333.337.search-card.all.click&vd_source=4f65863adf19c12522e7026402e62e53)
>- [个人网站迁移之旅：从博客到知识库，从 Hexo 到 Docusaurus](https://zhuanlan.zhihu.com/p/430942362)  

>[1].[win7安装nodejs失败,提示支持win8.1以上](https://blog.csdn.net/weixin_37254196/article/details/109713817)  
>[2].[个人网站迁移之旅：从博客到知识库，从 Hexo 到 Docusaurus(A1: 从零开始的 Docusaurus 配置生活)](https://zhuanlan.zhihu.com/p/430942362) 

[a]: https://docs.github.com/zh/pages/getting-started-with-github-pages/about-github-pages
[b]: https://zhuanlan.zhihu.com/p/183977963
[c]: https://juejin.cn/post/7215478156948701240