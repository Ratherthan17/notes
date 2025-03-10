---
date: 2023年11月10日 星期五 13:41:35
word_count: 505
reading_time: 3
---

# 把 User（用户）从C盘移到其他盘 && C盘只用来存操作系统（待完善...）

---

:::danger警告
1. **迁移 User（用户）并不是必要的**，只是我之前C盘老是爆红，所以寻找让它保持空间富裕的方法，但是此法并不完美，还会导致一些意外的问题，所以谨慎选择是否跟着做！

2. 本文**只适用于刚刚重装完系统的电脑**，如果你的系统不是刚刚重装的，那么**不建议操作**
:::

:::danger警告
1. **迁移 User（用户）并不是必要的**，只是我之前C盘老是爆红，所以寻找让它保持空间富裕的方法，但是此法并不完美，还会导致一些意外的问题，所以谨慎选择是否跟着做！

2. 本文**只适用于刚刚重装完系统的电脑**，如果你的系统不是刚刚重装的，那么**不建议操作**
:::

:::danger警告
1. **迁移 User（用户）并不是必要的**，只是我之前C盘老是爆红，所以寻找让它保持空间富裕的方法，但是此法并不完美，还会导致一些意外的问题，所以谨慎选择是否跟着做！

2. 本文**只适用于刚刚重装完系统的电脑**，如果你的系统不是刚刚重装的，那么**不建议操作**
:::

## 进入新系统先不要装软件

> 装完系统后，很可能会装必备的office等软件，先不要装，因为我们希望把office，chrome等默认安装到C盘的软件让他默认装到D盘去。

---

## 参考资料

### 迁移 User
- [Windows系统更改/迁移用户目录][Windows系统更改/迁移用户目录]
- [Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)][Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)]
- [更改Windows用户文件夹（Users）默认位置到其它盘][更改Windows用户文件夹（Users）默认位置到其它盘]


- [Windows 如何添加本地用户？][Windows 如何添加本地用户]
- [Win10如何创建新用户？][Win10如何创建新用户？]
- [Win10系统下如何添加本地账户并赋予管理员权限][Win10系统下如何添加本地账户并赋予管理员权限]

### C盘只用来存操作系统

- [win10 如何做到 C盘 的绝对干净,所有软件都安装到D盘，C盘只用来存操作系统。][win10 如何做到 C盘 的绝对干净,所有软件都安装到D盘，C盘只用来存操作系统。]
- [教你如何让windows系统的C盘空间变富裕，永远都不会用完。][教你如何让windows系统的C盘空间变富裕，永远都不会用完。]

## 用到的工具

- [Dism++][Dism++]

---

## 迁移 User 步骤

### 1. 修改注册表

- 按 Win + R 打开运行，输入 `regedit` 打开注册表，按照以下路径找到 `ProfilesDirectory` ，  
  双击它，把它的数值数据从 `%SystemDrive%\Users` 改成你想移到的盘里，我是移到 E数据盘  
  所以改成 `E:\Users`

    ```
    计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList\
    ```

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers1.png)

### 2. 创建新账户

:::tip提示
- 如果你不想下载 Dism++，或者下载的太慢、下不了啥的，可以：
    - 右键开始 -> 计算机管理 -> 本地用户和组 -> 用户 -> 右键 Administrator -> 属性 -> 取消勾选账户已禁用

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E5%BC%80%E5%90%AFAdministrator0.png)

:::



- 打开 Dism++ ，选择你的系统盘，点击工具箱 -> 账户管理 -> Administrator -> 启用账户

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E5%BC%80%E5%90%AFAdministrator2.png)

    - 因为我在U盘里也装了个系统，所以这里显示两个 `Windows 10 专业版 X64`，如果你不确定哪个才是电脑的系统，可以把U盘弹出拔掉先

- 注销，用 Administrator 账户登录

- 右键开始 -> 计算机管理 -> 本地用户和组 -> 用户 

    - 把原来的账户右键 -> 删除（这一步可选，我是想要一个和原来名一样的，所以删了，你可以不删）
    
        ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers3.png)

    - 对空白处右键 -> 新用户

        ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers4.png)

    - 输入用户名、密码（密码可不填），把下次登录更改密码取消掉，密码永不过期点上，最后点创建

        ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers5.png)

- 添加管理员权限

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%B7%BB%E5%8A%A0%E7%AE%A1%E7%90%86%E5%91%98%E6%9D%83%E9%99%90.png)



- 注销 Administrator 账户，用刚刚创建的账户登录，可以看到 E盘 的 Users 里有了该账户

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers6.png)

- 在桌面新建一个文件夹，右键点击属性，位置是 E:\Users\Zhang，成功了！

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%96%B0%E8%BF%81%E7%A7%BBUsers-%E6%B5%8B%E8%AF%95%E7%9C%8B%E6%A1%8C%E9%9D%A2.png)

> 迁移成功后，为了避免更改的注册表引发其他问题，还需将注册表的 ProfilesDirectory 项还原成 %SystemDrive%\Users    

---

## C盘只用来存操作系统步骤

### 1. 更改软件默认安装位置

- 点击开始 -> 设置 -> 系统 -> 存储 -> 更改新内容的安装位置 

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%9B%B4%E6%94%B9%E6%96%B0%E5%86%85%E5%AE%B9%E4%BF%9D%E5%AD%98%E4%BD%8D%E7%BD%AE0.png)
    
    - 新的应用我是改成 D软件盘，其他的改成 E数据盘，这里你按照你的需求改

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%9B%B4%E6%94%B9%E6%96%B0%E5%86%85%E5%AE%B9%E7%9A%84%E4%BF%9D%E5%AD%98%E4%BD%8D%E7%BD%AE.png)


- 按 Win + R 打开运行，输入 `regedit` 打开注册表，根据下面路径找到 `CurrentVersion`

    ```
    计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion
    ```
    - 把里面的 C 都改成 D（我的D盘是放软件的，你的D盘不见得也是，所以请按你的实际来）

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E4%BF%AE%E6%94%B9%E8%BD%AF%E4%BB%B6%E9%BB%98%E8%AE%A4%E5%AE%89%E8%A3%85%E4%BD%8D%E7%BD%AE2.png)

### 2. 更改环境变量

- 点击开始 -> 设置 -> 系统 -> 关于 -> 高级系统设置 -> 环境变量

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%9B%B4%E6%94%B9%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F1.png)
    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%9B%B4%E6%94%B9%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F2.png)

    - 把用户和系统的TEMP 和 TMP 改成 `E:\TEMP`

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E6%9B%B4%E6%94%B9%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F3.png)



### 3. 重启

> 重启一下电脑，让 注册表 和 设置 生效

- 再安装谷歌，成功安在了E盘

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%B0%B7%E6%AD%8C%E6%88%90%E5%8A%9F%E5%AE%89%E8%A3%85%E5%9C%A8E%E7%9B%98.png)

- 欸？不是，等会，怎么我本机的谷歌安在了E盘？而我的 M.2固态硬盘 安的是D盘？当初我咋弄的？

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%B0%B7%E6%AD%8C%E5%AE%89%E8%A3%85%E5%9C%A8%E4%BA%86D%E7%9B%98.png)

- 待完善......

### 4. 对 Office 建立软链接

:::note备注
- 我这次重装系统后没装 Microsoft Office，因为我找到了 WPS 的绿色纯净版，获取地址：*[WPS Office 2016 极限精简绿色版 2020.12][WPS]*
- 还有一个可以编辑PDF的软件，Adobe Acrobat DC 的破解版，得自B站UP主 `计算机进修工`：*[永久免费试用Acrobat DC][永久免费试用Acrobat DC]*
:::


- 首先要确保C盘的 `C:\Program Files\` 目录下没有 `Microsoft Office` 文件夹（刚重装完系统，没安 Microsoft Office 的话，C盘里应该是没有的）   
   然后在 D软件盘的 `D:\Program Files\` 目录下新建一个名为 `Microsoft Office` 的空文件夹

- 在搜索里输入 CMD ，找到命令提示符，以管理员身份运行

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E4%B8%BAOffice%E5%BB%BA%E7%AB%8B%E8%BD%AF%E9%93%BE%E6%8E%A51.png)

- 输入以下命令，回车

    ```
    mklink /J "C:\Program Files\Microsoft Office" "D:\Program Files\Microsoft Office"
    ```

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E4%B8%BAOffice%E5%BB%BA%E7%AB%8B%E8%BD%AF%E9%93%BE%E6%8E%A52.png)

- 完成后，C盘 `C:\Program Files\` 下会有一个 `Microsoft Office` 文件夹，图标有一个快捷方式的箭头

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E4%B8%BAOffice%E5%BB%BA%E7%AB%8B%E8%BD%AF%E9%93%BE%E6%8E%A54.png)


---

### 其它方式的清理

> 看这篇文章：*[教你如何让windows系统的C盘空间变富裕，永远都不会用完。][教你如何让windows系统的C盘空间变富裕，永远都不会用完。]*

> -  清理休眠文件
>
>       - 系统休眠时会将将文件保存起来，当你从休眠状态唤醒时这些文件并不会被自动清除，通过下面命令进行清理即可
>       ```
        powercfg -h off
        ```
> - 清除重复的驱动
> - 更改虚拟内存
> - 利用Dism++进行清理一些文件  
> - 永久关闭windows更新，Dism++中也有这个功能
> - 安装软件的时候选别的盘      


---

## 遇到的错误

### 1. 用软链接的方式迁移Users

- 我在 2022 年 3 月的时候，曾重装过一次系统，那时我迁移 Users 用的软链接的方式，这次我一开始也用的该方法，但是却出错了

    - 登不进去了

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%BF%81%E7%A7%BB%E5%87%BA%E9%97%AE%E9%A2%98.jpg)

    - 另外，我之前收藏的文章，不知道是删除了还是怎么了，反正是 404 了，所以我是重新找的教程。
    
    > 教程：
    > 1. *[Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)][Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)]*
    > 2. *[更改Windows用户文件夹（Users）默认位置到其它盘][更改Windows用户文件夹（Users）默认位置到其它盘]*

    他们说在开机的时候按 F8 出现一个黑底白字的菜单，反正我是出不来。我是在高级启动选项 疑难解答 -> 命令提示符 里做的。  
    一开始不对，看了第二篇文章才发现，在这里盘符是乱的，为了弄对，我想到一个绝妙的办法——那就是在根目录下新建一个名为 “这是XX盘”的文件夹，

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E5%91%BD%E4%BB%A4%E8%A1%8C3.jpg)
    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E5%91%BD%E4%BB%A4%E8%A1%8C1.jpg)
    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E5%91%BD%E4%BB%A4%E8%A1%8C2.jpg)

    成了，C 是D盘、D 是E盘、E 是 C盘，我真是一个 天 ↑ 才 → 

    - 唉，可惜这个办法失败了

### 2. 快捷方式出错

- 更改软件默认安装位置、修改注册表后，我安装了谷歌，虽然的确安在了D盘，但是桌面上的快捷方式出错了：

    - 不要看我框起来的，看上面的目标是 C盘，双击快捷方式会弹出个报错信息，可惜当初我没截图——可是我记得截了呀怎么找不着呢，我记错了？

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%B0%B7%E6%AD%8C%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F%E5%87%BA%E9%94%99.png)

    - 如果你也出现了这种问题，先记一下安装路径，然后把快捷方式删了，再根据路径找到软件右键发送到桌面快捷方式，重建一个快捷方式就行了  
    - 然后重启一下，再安装别的软件的时候应该就正常了

### 3. 删除用户

- 我用这种方法删除账户，要求我先把它注销掉

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7-%E5%88%A0%E9%99%A4%E6%97%A7%E7%94%A8%E6%88%B7%E5%A4%B1%E8%B4%A5.png)

- 而在用户和组里，可以直接删除

    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7-%E5%88%A0%E9%99%A4%E6%97%A7%E7%94%A8%E6%88%B73.png)
    ![Alt text](../../../static/img/Win10/ReinstallWin10/MigrateUsers/%E8%BF%81%E7%A7%BB%E7%94%A8%E6%88%B7-%E5%88%A0%E9%99%A4%E6%97%A7%E7%94%A8%E6%88%B74.png)

---

[Windows系统更改/迁移用户目录]: https://www.cnblogs.com/macrored/p/15849185.html
[Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)]: https://blog.csdn.net/10km/article/details/90738267
[更改Windows用户文件夹（Users）默认位置到其它盘]: https://www.cnblogs.com/nulige/p/7373965.html

[win10 如何做到 C盘 的绝对干净,所有软件都安装到D盘，C盘只用来存操作系统。]: https://yumbo.blog.csdn.net/article/details/122310785
[教你如何让windows系统的C盘空间变富裕，永远都不会用完。]: https://yumbo.blog.csdn.net/article/details/110944883


[Windows 如何添加本地用户]: https://zhuanlan.zhihu.com/p/628357779?utm_id=0
[Win10如何创建新用户？]: https://zhuanlan.zhihu.com/p/402730043?utm_id=0
[Win10系统下如何添加本地账户并赋予管理员权限]: https://zhuanlan.zhihu.com/p/546262125?utm_id=0


[Dism++]: https://github.com/Chuyu-Team/Dism-Multi-language/releases/tag/v10.1.1002.2

[WPS]: http://www.aichunjing.com/soft/1241.html
[永久免费试用Acrobat DC]: https://www.bilibili.com/video/BV1QC4y1b71V/?vd_source=4f65863adf19c12522e7026402e62e53


[Win7/Win10移动用户文件夹(C:\Users)移到非系统盘(如D:)]: https://blog.csdn.net/10km/article/details/90738267
[更改Windows用户文件夹（Users）默认位置到其它盘]: https://www.cnblogs.com/nulige/p/7373965.html