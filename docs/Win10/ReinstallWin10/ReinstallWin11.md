---
date: 2025年03月10日 星期一 10:23:16
word_count: 364
reading_time: 2
---

# 用 U盘 重装 Win11 系统

- 不得不说，和 win10 比起来，现在的 win11 好卡啊，尼玛！

---

## <B2>参考资料及用到的资源地址</B2>

### <B3>参考资料</B3>

- [上一篇 用 U盘 重装 Win10 系统](docs\Win10\ReinstallWin10\ReinstallWin10.md)
- [Windows 11如何跳过联网验证和绕过 Microsoft 帐户登录要求？](https://zhuanlan.zhihu.com/p/627268754)
- [windows 11 恢复右键传统菜单](https://zhuanlan.zhihu.com/p/550043382)
- [Windows常用脚本总结](https://juejin.cn/post/7260457485478723584) | [github](https://github.com/javakam/Windows-Scripts)
- [解决win11莫名其妙cpu占用过高问题（亲测有效）](https://www.bilibili.com/video/BV1fU4y1B7gu/?share_source=copy_web&vd_source=407f92cf6751e29e9d623fde5b09db24)
- [Windows 11 系统任务栏图标消失，一片空白怎么解决?](https://www.zhihu.com/question/495412444/answer/2289404991)
- [一招搞定Windows11字体模糊有锯齿问题——评论区](https://www.bilibili.com/video/BV1yN4y1g71L/?share_source=copy_web&vd_source=407f92cf6751e29e9d623fde5b09db24)


### <B3>资源地址</B3>

- [MSDN 官网——下载操作系统镜像（新版）] [MSDN（新版）]
- [FirPE 官网] [FirPE]
- [云萌 Windows 10+ 激活工具](https://cmwtat.cloudmoe.com/cn.html) 
- [图吧工具箱](https://www.tbtool.cn/)

---

## <B2>步骤</B2>

### <B3>1. 下载系统镜像</B3>

- 点击  [-> *MSDN 官网——下载操作系统镜像（新版）* <-] [MSDN（新版）]  打开“我告诉你”官网，登陆进去，会弹出一个捐助窗口，可以捐助一下，也可以点击右下角的本次忽略。
- 把鼠标放到 windows11 上，点击 <W>详细信息</W> ，跳转页面后，往下划，找到  <W>建议使用</W> ，选择一个系统镜像，点右边的复制，用百度网盘或迅雷下载到电脑上。

### <B3>2. 制作启动盘</B3>

- 打开  [*FirPE 官网*] [FirPE]  ，点击 左上角 <W>FirPE Project</W> 左边的菜单栏（三个横线图标）， 应该默认在 <W>目录</W> 选项卡下，往下划，点击第⑧项 <W>下载地址</W>，然后选一个云盘下载
  - 推荐选择：<W>官方指定免登陆不限速下载</W>、<W>东京蓝调的博客</W>、<W>IPFS CID（荷兰）下载分流</W>，免登陆，不限速
  - 有一个需要注意的地方，如果选官方下载，不要点<W>打包下载</W>，而是点右上方的下载
  
import installFirePE from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/1-installFirPE.png';

<CardImg src={installFirePE} isCenter={false} />

- 安装完后打开，选择要制作成启动盘的U盘，然后点击 <W>全新制作</W>
- 制作完成后关闭，然后在U盘里新建个文件夹，取名叫系统，把下载的系统镜像文件复制进里面

### <B3>3. 进入PE，安装系统</B3>

#### 3.1 进入PE

- 如果电脑本身系统就是 win10 或 win11 ，点击 <W>开始</W> -> <W>电源</W> -> 按住 shift 键不放 点击 <W>重启</W>
  - 电脑会进入高级启动选项，点击 <W>使用设备</W> -> <W>EFI USB Device</W> 按回车，电脑会重启进入PE系统

- 如果本身系统不是 win10 或 win11 ，下载 [*图吧工具箱*](https://www.tbtool.cn/) ，打开后点击 <W>主板工具</W> -> <W>AIDA64</W>

import TuBaTools from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/2-TuBaTools.png';

<CardImg src={TuBaTools} isCenter={false} />

- 打开 AIDA64 ，点击 <W>计算机</W> -> <W>系统概述</W> ，在主板部分可以看到电脑的主板型号，然后在浏览器搜索该主板进入 bios 的按键

import AIDA64 from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/3-AIDA64.png';

<CardImg src={AIDA64} isCenter={false} />

- 搜到后重启，**连续点按**进入 bios 的按键，不要只按住不放，没用，进入 BIOS 后，怎么设置用U盘启动，上网搜下对应主板的设置吧，不同主板的 BIOS 界面有的地方不一样。

#### 3.2 安装系统

- 如果成功进入PE了，找到之前放进U盘里的系统镜像，右键装载，会打开一个DVD或者CD驱动器的窗口，双击里面的　setup.exe ，开始安装系统

- 安装部分，直接看我上一篇 [*Win10*](docs\Win10\ReinstallWin10\ReinstallWin10.md#安装系统) 的吧，我懒得写了

### <B3>4. 安装时设置</B3>

####  跳过联网

:::note 备注
- 如果这个方法失效了，可以用下这篇文章的方法2，文章：***[Windows 11如何跳过联网验证和绕过 Microsoft 帐户登录要求？](https://zhuanlan.zhihu.com/p/627268754)***
:::


- 等你完成添加完键盘布局等操作后，会发现 Win11 要求联网和登陆微软账户才能进行下一步

import SkipNetworking1 from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/4-SkipNetworking1.jpg';

<CardImg src={SkipNetworking1} isCenter={false} />

- 按键盘上的 <W>shift + F10</W> ，打开命令提示符，输入 <W>oobe\bypassnro</W> ，然后回车

import SkipNetworking2 from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/4-SkipNetworking2.jpg';

<CardImg src={SkipNetworking2} isCenter={false} />

- 电脑会重启，然后自动进入 win11 的安装界面，等再次来到联网这一步，会发现 下一步 的左边多出一个 <W>我没有internet连接</W>

import SkipNetworking3 from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/4-SkipNetworking3.jpg';

<CardImg src={SkipNetworking3} isCenter={false} />

- 点击它，接着选择 <W>继续执行受限设置</W>

import SkipNetworking4 from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/4-SkipNetworking4.jpg';

<CardImg src={SkipNetworking4} isCenter={false} />

### <B3>5. 安装后设置</B3>

#### 5.1 系统激活

- 下载 *[云萌 Windows 10+ 激活工具](https://cmwtat.cloudmoe.com/cn.html)* ，自动检测系统版本，一键激活

import SystemActivation from '@site/static/img/Win10/ReinstallWin10/ReinstallWin10/SystemActivation.png'

<CardImg src={SystemActivation} isCenter={true}/>

:::tip 备注
- 可能会显示连接不上微软的服务器，开下梯子再重新激活一下
:::

#### 5.2 右键菜单样式改回 win10

- 下载下面的批处理文件，一键切换 win10、win11 右键菜单样式  
[***切换windows菜单样式.bat***](./切换windows菜单样式.bat)

- 输入 1 回车，会切换到 win10 右键菜单样式，输入 2 回车，会切换到 win11 右键菜单样式

import ChangeMenuStyle from '@site/static/img/Win10/ReinstallWin10/ReinstallWin11/6-ChangeMenuStyle.png';

<CardImg src={ChangeMenuStyle} isCenter={false} />

#### 5.3 添加桌面图标

- 对桌面右键 -> 个性化 -> 主题 -> 往下划，桌面图标设置 -> 勾选 <W>计算机</W> 和 <W>控制面板</W> ，然后点击 <W>应用</W>

### <B3>6. Win11 问题</B3>

#### 6.1 任务栏图栏消失，一片空白

- 点击 <W>开始</W> -> 搜索 <W>资讯</W> 和 <W>天气</W> ，将这两个应用卸载



---

[MSDN（下载操作系统镜像）]: https://msdn.itellyou.cn/
[MSDN（新版）]: https://next.itellyou.cn/Identity/Account/Login?ReturnUrl=%2FOriginal%2FIndex

[FirPE]: https://firpe.cn/page-247