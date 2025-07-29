# Tech-Nav - 科技风格导航网站

<div align="center">

![Tech-Nav](https://img.shields.io/badge/Tech--Nav-导航网站-blue?style=for-the-badge)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

一款极具炫酷科技风格的导航网站，为您提供便捷的网站收藏和访问服务

[在线预览](https://nav.21zys.com) · [报告问题](https://github.com/AhYi8/tech-nav/issues) · [功能建议](https://github.com/AhYi8/tech-nav/issues)

</div>

## ✨ 功能特性

- 🎨 **科技风格设计** - 暗黑主题配合动态星空背景，营造科技感氛围
- 🔍 **智能搜索** - 支持网站标题、描述、关键词的模糊搜索
- 🎯 **拖拽排序** - 支持卡片拖拽自定义排序，个性化布局
- 💾 **本地存储** - 用户自定义排序和设置保存在 localStorage 中
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- ⚡ **纯静态页面** - 无框架依赖，加载速度极快
- 🔧 **易于配置** - 配置与页面分离，方便维护和扩展
- ➕ **自定义添加** - 支持用户自定义添加网站和类目
- 🎭 **图标支持** - 集成 Lucide 图标库，丰富的图标选择

## 🚀 快速开始

### 在线预览
访问 [在线演示](https://your-demo-url.com) 体验完整功能

### 本地运行
```bash
# 克隆项目
git clone https://github.com/AhYi8/tech-nav.git

# 进入项目目录
cd tech-nav

# 直接打开 index.html 文件即可
# 或使用本地服务器
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 📁 项目结构

```
tech-nav/
├── index.html              # 主页面入口
├── config/
│   └── nav-config.js       # 导航配置文件
├── css/
│   └── common.css          # 公共样式文件
├── vendor/                 # 第三方库目录
│   ├── css/
│   │   └── google-fonts.css
│   ├── fonts/              # 字体文件
│   └── js/
│       ├── tailwind.js     # Tailwind CSS
│       ├── lucide.js       # Lucide 图标库
│       └── Sortable.min.js # 拖拽排序库
├── assert/
│   └── ico/                # 图标资源
├── favicon.ico             # 网站图标
└── README.md              # 项目说明
```

## 🛠️ 技术栈

- **前端框架**: 原生 HTML5 + CSS3 + JavaScript
- **样式框架**: Tailwind CSS (CDN)
- **图标库**: Lucide Icons
- **拖拽功能**: SortableJS
- **字体**: Google Fonts (Noto Sans SC + Exo 2)
- **构建工具**: 无需构建，直接运行

## 📖 使用指南

### 基本使用

1. **浏览网站**: 点击任意卡片即可在新标签页打开对应网站
2. **搜索功能**: 在顶部搜索框输入关键词快速查找网站
3. **拖拽排序**: 长按卡片可拖拽调整顺序，自动保存到本地
4. **侧边栏导航**: 点击左侧类目快速跳转到对应分类

### 自定义配置

#### 修改网站信息
编辑 `config/nav-config.js` 中的 `siteConfig` 对象：

```js
const siteConfig = {
  title: 'Tech-Nav - 导航网站',
  description: '精选优质网站导航，为您提供便捷的网站收藏和访问服务',
  keywords: '导航网站,网站收藏,工具导航,开发工具,设计资源,学习平台',
  sidebarHeader: {
    title: 'Tech-Nav',
    description: '精选网站导航'
  },
  copyright: 'Powered by @AhYi8 ✨ © 2025'
};
```

## 🔧 开发指南

### 添加新类目

1. 在 `categoryIcons` 中添加类目图标：
```js
const categoryIcons = {
  '新类目名称': 'lucide-icon-name'
};
```

2. 在 `navData` 中添加类目数据：
```js
let navData = {
  '新类目名称': [
    // 网站列表
  ]
};
```

### 添加新网站

在对应类目数组中添加网站对象：

```js
{
  title: '网站名称',
  desc: '网站描述信息',
  url: 'https://www.example.com',
  logoUrl: 'https://www.example.com/favicon.ico',
  keywords: '搜索关键词'
}
```

### 自定义样式

主要样式变量定义在 `index.html` 的 `:root` 中：

```css
:root {
  --bg-color: #0d1117;
  --sidebar-bg-color: #161b22;
  --card-bg-color: rgba(22, 27, 34, 0.85);
  --border-color: rgba(139, 148, 158, 0.2);
  --text-color: #c9d1d9;
  --text-secondary-color: #8b949e;
  --accent-color: #58a6ff;
  --sidebar-width: 230px;
}
```

## 🌐 部署指南

### Vercel 部署 (推荐)
1. Fork 本项目到你的 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 一键部署，支持自定义域名

### Cloudflare Pages
1. 在 [Cloudflare](https://www.cloudflare.com) 中创建新项目
2. 连接 GitHub 仓库
3. 享受免费 HTTPS 和 CDN 加速

### GitHub Pages
1. 在项目设置中启用 GitHub Pages
2. 选择 main 分支作为源
3. 访问 `https://username.github.io/tech-nav`

### 其他部署方式
- **Netlify**: 拖拽文件夹即可部署
- **自建服务器**: 上传文件到 Web 服务器目录

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

### 贡献类型
- 🐛 Bug 修复
- ✨ 新功能开发
- 📝 文档改进
- 🎨 UI/UX 优化
- 🔧 代码重构

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [Lucide](https://lucide.dev/) - 精美的图标库
- [SortableJS](https://sortablejs.github.io/Sortable/) - 强大的拖拽库
- [Google Fonts](https://fonts.google.com/) - 优质字体服务

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

Made with ❤️ by [Your Name](https://github.com/AhYi8)

</div>
