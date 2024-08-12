# 修改 Docusaurus 主题样式

---

<W>src</W> -> <W>css</W> 下有个 <W>custom.css</W> ，在这个文件里编写的所有 CSS 都会全局可用，类名可以直接以字符串形式引用。

--------------------------------------------------------------------------------------------

## <B2>用 Infima 给站点添加样式</B2>

@docusaurus/preset-classic 用 Infima 作为底层样式框架。 Infima 提供了灵活的布局，以及常见的 UI 组件样式，适用于以内容为中心的网站（博客、文档、首页）。 想要了解更多详情，请查看 Infima 网站。

- [***Infima 官网***](https://infima.dev/)

- [***->修改主题颜色<-***](https://docusaurus.io/zh-CN/docs/next/styling-layout#styling-your-site-with-infima)

---

## <B2>修改 上/下 一篇文档 按钮样式</B2>

### <B3>改为中文</B3>

- 在 <W>src</W> 下 新建一个名为 <W>theme</W> 的文件夹，然后在 <W>node_modules/@docusaurus/theme-classic/src/theme/</W> 下找到 <W>DocPaginator</W> 文件夹，将它复制到自己建的 <W>theme</W> 里。

- 打开 <W>DocPaginator</W> 里的 <W>index.tsx</W> ，将里面的 <W>previews 、next</W> 改为 “上一篇文档”、“下一篇文档” 

```jsx title="/DocPaginator/index.tsx"
    {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel={
            <Translate
              id="theme.docs.paginator.previous"
              description="The label used to navigate to the previous doc">
              // highlight-next-line
              Previous
            </Translate>
          }
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={
            <Translate
              id="theme.docs.paginator.next"
              description="The label used to navigate to the next doc">
              // highlight-next-line
              Next
            </Translate>
          }
          isNext
        />
      )}
```
:::note 备注
本地开发时，需要重新启动服务器 ( <W>npm start</W> ) 才能看到修改后的效果。
:::

### <B3>更改样式</B3>

- 打开 <W>src</W> -> <W>css</W> 下的 <W>custom.css</W> ，可以通过 <W>.paginator-nav_Link</W> 类来修改 上/下 一篇文档 按钮样式。

- 以下是我的样式，诸位可以根据自己的喜好进行修改：

```css title="/src/css/custom.css"
.pagination-nav__link:hover {
  background-color: #cde4fa94; /* 鼠标悬停时背景颜色 */
}
.pagination-nav__link {
  border-color: #b6daf8; /* 边框颜色 */
  border-width: 3px; /* 边框厚度 */ 
}

[data-theme='dark'] .pagination-nav__link {
  border-color: #1c5e4f; /* 暗黑模式下，边框颜色 */
  border-width: 3px; /* 暗黑模式下，边框厚度 */  
}

[data-theme='dark'] .pagination-nav__link:hover {
  background-color: #1dffc733; /* 暗黑模式下，悬停时背景颜色 */
  border-color: #2ed3af; /* 暗黑模式下，悬停时边框颜色 */
}
```

### <B3>遇到的错误</B3>

- 我看 <W>custom.css</W> 里的那么多主题配色类名写在了一个 <W>[data-theme='dark']{}</W> 里，所以我把暗黑模式下的 <W>.paginator-nav_Link</W> 也写在了一个里面，就像下面这样：

```css title="/src/css/custom.css"
[data-theme='dark'] { 
  
  .pagination-nav__link:hover {
    background-color: #1dffc733; /* 暗黑模式下，悬停时背景颜色 */
    border-color: #2ed3af; /* 暗黑模式下，悬停时边框颜色 */
  }

  .pagination-nav__link {
    border-color: #1c5e4f; /* 边框颜色 */
    border-width: 3px; /* 边框厚度 */    
  }

}
```


- 在本地开发服务器上 (<W>npm start</W> 后打开的网站）也显示的很好，结果我部署到 vercel 上后，样式却变得乱七八糟。

- 我排查了很久，才发现不能这么写，只能像最上面那样给每个类名前面加上 <W>[data-theme='dark']</W> 才行。

- 此外，有时候明明修改了样式，但网站还是显示之前的样式。我中间就修改成正确的写法来着，但因为这个原因，我以为这样写也不对，导致我又浪费了很多时间。

    - **解决办法**：按 <W>shift+f5</W> 或 <W>ctrl+f5</W> 强制刷新一下浏览器，就可以看到修改后的样式了。

- 最后，在部署到 vercel 或 github pages 等托管平台之前，**可以先进行本地测试，看看实际效果。**

    -  1、在项目根目录下运行 <W>npm run build</W> ，构建网站的静态文件

    ```bash
    npm run build
    ```
    - 2、接着运行 <W>npm run serve</W> ，浏览器会自动打开 localhost:3000 ，可以看到网站实际部署后的效果。如果没错，就可以部署到托管平台了，要是不对，还可以再改，总比上传到 github 了才发现有问题的好。

    ```bash
    npm run serve
    ```

--------------------------------------------------------------------------------------------

## <B2>修改 告示 样式</B2>

### <B3>步骤</B3>

- 打开 <W>src</W> -> <W>css</W> 下的 <W>custom.css</W> ，可以通过 <W>.alert</W> 类来修改 告示 样式。

- 以下是我的样式，诸位可以根据自己的喜好进行修改：

<Tabs>
<TabItem value="css" label="CSS代码">

```css title="/src/css/custom.css"
.alert {
  border: 2px solid var(--ifm-alert-border-color);
}
```

</TabItem>
<TabItem value="img" label="效果">

![alt text](@site/static/img/GenerateSite/ModifyTheme/alert_2024-08-12_21-56-30.png)

</TabItem>
</Tabs>

:::tip 提示

[***Docusaurus 官网***](https://docusaurus.io/zh-CN/docs/next/markdown-features/admonitions) 上的 “警告” 语法标签，说是 “warning” ，但用起来却和 “danger” 一样，实际上应该是 “caution”

:::

### <B3>其他</B3>

- 我是看了 [***愧怍***](https://kuizuo.cn/docs/docusaurus-component)  这位老哥的网站样式，觉得很好看，于是也对自己的网站进行了魔改。
- 一开始我在 <W>custom.css</W> 里一个一个给这些告示设置样式，但后来看了 [***他的 github ***](https://github.com/kuizuo/blog/blob/main/src/css/custom.css) 中的代码，才想起可以统一设置。
- 我之后又试了试，把 统一设置 放在下面，会覆盖掉上面单独设置的样式，所以如果想单独给某个告示设置样式的话，就需要把它放在 统一设置 的下面。 
- 单独设置告示的类名为：
  - tip : <W>.alert--success</W>
  - note : <W>.alert--secondary</W>
  - info : <W>.alert--info</W>
  - warning : <W>.alert--warning</W>
  - danger : <W>.alert--danger</W>
- docusaurus/preset-classic 用 Infima 作为底层样式框架，这些类名是我在 [***Infima 官网***](https://infima.dev/)  上找到的。