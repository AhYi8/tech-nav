# 1. Tech-Tools

- 一款极具炫酷科技风格的导航网站
- 完全静态页面设计，无任何第三方框架
- 解耦配置与页面，方便维护，动态增加导航卡片
- 所有工具均为一个完整的 `html` 页面，无任何其他依赖，可以单独启动
- 首页卡片支持**拖拽自定义排序**，数据存在 `localStorage` 中

# 2. 项目结构介绍

- `index.html`：主页面，所有工具的入口
- `tools`：工具目录，每个工具为一个独立的 html 文件
- `tools-config.js`：工具配置文件，定义了所有工具的名称、图标、描述等信息
- `css`：css 文件目录，存放了本项目使用的一些 css 样式
- `css/common.css`：本项目使用的一些公共 css 样式
- `vendor`：第三方库目录，存放了本项目使用的一些第三方库，如 `fontawesome`、`lucide.js` 等

# 3. 新增导航卡片

1. 新增类目

```js
// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
  // ...
  "类目名称": "类目标签"
};
```

1. 在 `tools-config.js` 文件中新增一个工具配置项，格式如下：

```js
let navData = {
  // ...
  "类目名称": [
    {
      title: '网站名称',
      desc: '网站的描述信息',
      url: 'https://www.website.com',
      logoUrl: 'https://www.website.com/favicon.ico',
      keywords: '网站的搜索关键词'
    }
  ]
};
```

2. 在 `tools` 目录下新增一个 html 文件，文件名与 `tools-config.js` 中配置的 `url` 字段一致
3. 在新增的 html 文件中引入 `css/common.css` 文件，即可使用本项目的一些公共 css 样式

# 4. 启动项目

1. 克隆项目到本地
2. 双击打开 `index.html` 文件，即可启动项目

# 4. 自部署

- 使用 [Vercel](https://vercel.com) 部署，完全免费，支持自定义域名
- 使用 [Cloudflare](https://www.cloudflare.com) 部署，完全免费，支持自定义域名，免费 HTTPS，免费 CDN 加速**（推荐）**。
- 使用 [GitHub Pages](https://pages.github.com) 部署，免费。


# 5. 注意

- 本项目使用了一些第三方库，如 `fontawesome`、`highlight.js` 等，请自行分析是否符合自己的需求
- 本项目使用了 `fontawesome` 图标库，需要在 `index.html` 文件中引入 `fontawesome` 的 css 文件
- 本项目使用了 `highlight.js` 代码高亮库，需要在 `tools` 目录下的工具 html 文件中引入 `highlight.js` 的 js 文件
