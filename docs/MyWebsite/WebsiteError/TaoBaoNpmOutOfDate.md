# npm报错：request to [https://registry.npm.taobao.org] failed, reason： certificate has expired

---

参考资料：
- [npm报错：request to https://registry.npm.taobao.org failed, reason certificate has expired](http://t.csdnimg.cn/Fxf3k)
- [淘宝镜像的https证书过期(已解决)](https://www.cnblogs.com/ll666/p/18089299)


---

## 原因

- npm 淘宝镜像已经从 http://registry.npm.taobao.org 切换到了 http://registry.npmmirror.com

## 解决步骤

- 打开 cmd ，输入以下命令，先看下自己的 npm 镜像是不是过期的：

    ```
    npm config get registry
    ```
    ![alt text](@site/static/img/GenerateSite/TaobaoNpmOutOfDate/1-查看npm镜像_2024-07-26_20-31-27.png)

- 是的话，输入以下命令，切换新源

    ```
    npm config set registry https://registry.npmmirror.com
    ```
- 最后再 ` npm config get registry ` 下，看看是否切换成功了

## 其他

- 清空缓存失败，我不管它直接换源，结果可以切换过去

    ```
    npm cache clean --force
    ```
   ![alt text](@site/static/img/GenerateSite/TaobaoNpmOutOfDate/直接设置_2024-07-26_20-40-53.png)