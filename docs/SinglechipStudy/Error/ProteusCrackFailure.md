# Proteus 因修改安装位置导致破解失败

---

## 1. 原因

- 目前我们使用的 Protues8.9 的破解器都是“PP8.9.exe”，这个软件会默认将破解文件释放到C盘的默认路径下。  
**如果Protues软件未安装在C盘就会导致破解失败。**

## 2. 解决办法

- 点 PP8.9.exe 后，会在 `C:\Program Files (x86)\Labcenter Electronics` 路径下生成一些文件，将这些文件复制到 proteus 的安装目录（对桌面的proteus程序右键打开文件所在位置）里，覆盖一下即可。

- 有两个文件夹，复制的是这俩文件夹内的东西，而不是把这俩文件夹复制进去

    ![alt text](../../../static/img/Singlechip/Error/Proteus/ProteusCrack_2024-05-01_19-38-48.png)


## 3. 参考资料

- [proteus8.9显示无法找到许可证,但自己的许可证是可用的](https://blog.csdn.net/m0_55746629/article/details/123849823)