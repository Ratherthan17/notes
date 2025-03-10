---
date: 2024年03月04日 星期一 21:31:29
word_count: 122
reading_time: 1
---

# 从我的 Github 上 clone 下来的网站，用 npm start 出错

---

> [[Git].gitignore文件的配置使用](https://zhuanlan.zhihu.com/p/52885189)


---

## 解决办法

- 右击 ` .docusaurus.7z `  和 ` node_modules能用的.7z ` 这俩压缩包，提取到当前位置

   ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest9.png)


## 当初的解决过程

- 从 Github 上 clone 下来的网站，运行本地开发服务器时，显示'docusaurus'不是内部或外部命令，也不是可运行的程序或批处理文件

   ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用1.png)

- 而我之前备份的网站却可以运行，我对比了一下这两个项目，发现 clone 下来的少俩文件夹
  
   ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用2.png)

- 我把那俩文件夹复制进 clone 的项目里，再次运行，运行成功

    ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用4.png) 
    ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用5.png)
    ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用6.png)

- 代码库里之所以没有这俩文件夹，是因为它们默认被写进了 ` .gitignore `文件中，把它们删掉或注释掉就好了

   ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用3.png)
   ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用8.png)

- 哦？给我弹了个这个，我点了否，看看会发生什么事

   ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用9.png)

   - 好家伙，10K！，那算了，还是加进去吧
      
      ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用10.png)
   
   - 呵呵，我TM直接压成压缩包传上去
      
      ![alt text](@site/static/img/GenerateSite/CloneError/拍桌表情包.jpg)

   - 然后 clone 下来了再解压缩 

      ![alt text](@site/static/img/GenerateSite/CloneError/Clone下来的不能用13.png)

-  可恶，又出错了。我新建了个 Test 文件夹，clone 了仓库，结果说 “Docusaurus could not load module at path...”

      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest3.png)

   - 我把 “ node_modules ” 换成之前的，却又可以

      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest4.png)

   - 我把刚拷过来的包，压成新压缩包，再解压缩，再次运行，运行成功

      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest5.png)
      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest6.png)
      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest7.png)
   
   - 把能用的压缩包上传到 github
   - 新建 Test2 ，clone 库，解压缩，㖿！运行成功

      ![alt text](@site/static/img/GenerateSite/CloneError/CloneTest8.png)
      
   - 看来是之前的压缩包不知道哪出问题了，现在好了。