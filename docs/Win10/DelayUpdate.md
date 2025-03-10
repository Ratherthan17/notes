---
date: 2024年07月24日 星期三 21:37:41
word_count: 65
reading_time: 1
---

# 延长 Winodws 系统暂停更新天数

---

## 原视频
- [彻底禁用 Windows 自动更新的几种方法！还你的电脑一片清净](https://www.bilibili.com/video/BV1Ew4m1k7gF/?share_source=copy_web&vd_source=407f92cf6751e29e9d623fde5b09db24)

---



## 步骤

- 按下 win+r 输入 regedit 打开注册表编辑器

- 在注册表编辑器中，定位到如下目录：

    ```
    计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings
    ```

- 对 Settings 右键，新建一个“DWORD（32位）值（D）”

    ![alt text](../../static/img/Win10/DelayUpdate/2-新建DWORD_2024-07-24_19-38-25.png)

- 将刚创建的值命名为：

    ```
    FlightSettingsMaxPauseDays
    ```
    - 注意：不要有空格和其他名称。

    ![alt text](../../static/img/Win10/DelayUpdate/3-重命名_2024-07-24_19-38-25.png)

- 双击这个值，将基数改为十进制
- 然后就可以在数值数据中输入想要暂停更新的天数了

    ![alt text](../../static/img/Win10/DelayUpdate/4-修改天数_2024-07-24_19-38-25.png)


- 点击确定

## 效果

- 开始时可暂停更新天数

    ![alt text](../../static/img/Win10/DelayUpdate/1-开始暂停天数_2024-07-24_19-38-25.png)
    ![alt text](../../static/img/Win10/DelayUpdate/1-2-开始暂停天数_2024-07-24_19-38-25.png)


- 做完后可暂停更新天数

    ![alt text](../../static/img/Win10/DelayUpdate/5-最后可暂停天数_2024-07-24_19-47-49.png)
    
## 其他
- 如果不想用这个了，只要把数改回 0 ，就可以恢复成原来的了
