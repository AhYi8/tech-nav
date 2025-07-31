<div align="center">

# Tech-Nav - 科技风格导航网站

![Tech-Nav](https://img.shields.io/badge/Tech--Nav-导航网站-blue?style=for-the-badge)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)![Version](https://img.shields.io/badge/Version-2.0.0-orange?style=for-the-badge)

一款极具炫酷科技风格的导航网站，为您提供便捷的网站收藏和访问服务

[在线预览](https://nav.21zys.com) · [报告问题](https://github.com/AhYi8/tech-nav/issues) · [功能建议](https://github.com/AhYi8/tech-nav/issues) · [更新日志](#-更新日志)

</div>

## ✨ 功能特性

### 🎨 界面设计
- **科技风格设计** - 暗黑主题配合动态星空背景，营造科技感氛围
- **响应式设计** - 完美适配桌面端、平板和移动设备
- **动态背景** - 多层星空动画效果，沉浸式视觉体验
- **毛玻璃效果** - 现代化的背景模糊和透明度设计
- **渐变边框** - 科技感十足的彩色渐变边框效果

### 🔍 搜索功能
- **智能搜索** - 支持网站标题、描述、关键词的模糊搜索
- **实时搜索** - 输入即搜索，无需按回车
- **搜索高亮** - 搜索结果关键词高亮显示
- **搜索历史** - 自动保存搜索历史记录

### 🎯 交互功能
- **拖拽排序** - 支持卡片拖拽自定义排序，个性化布局
- **收藏功能** - 一键收藏喜爱的网站，快速访问
- **二级导航** - 支持分类下的子分类，层次化管理
- **侧边栏导航** - 快速跳转到指定分类
- **通知系统** - 操作反馈和状态提示

### 💾 数据管理
- **本地存储** - 用户自定义排序和设置保存在 localStorage 中
- **数据持久化** - 自动保存用户的个性化配置
- **导入导出** - 支持配置数据的备份和恢复
- **自定义添加** - 支持用户自定义添加网站和类目

### ⚡ 性能优化
- **纯静态页面** - 无框架依赖，加载速度极快
- **CDN加速** - 第三方资源使用CDN加速
- **懒加载** - 图片和资源按需加载
- **缓存优化** - 合理的缓存策略

### 🔧 开发友好
- **易于配置** - 配置与页面分离，方便维护和扩展
- **模块化设计** - 代码结构清晰，易于二次开发
- **图标支持** - 集成 Lucide 图标库，丰富的图标选择
- **主题定制** - 支持自定义主题色彩和样式

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

#### 样式配置选项
在 `siteConfig.styleConfig` 中可以配置以下选项：

```js
styleConfig: {
  showLogo: true,              // 是否显示网站LOGO
  showSubCategoryIcons: true,  // 是否显示二级导航图标
  nav_card_columns: 4,         // 导航卡片列数 (1-6)
  stickySearchBox: true        // 是否启用搜索框吸顶
}
```

#### 主题色彩定制
在 `index.html` 的 `:root` 中修改CSS变量：

```css
:root {
  --bg-color: #0d1117;                    /* 背景色 */
  --sidebar-bg-color: #161b22;            /* 侧边栏背景色 */
  --card-bg-color: rgba(22, 27, 34, 0.85); /* 卡片背景色 */
  --border-color: rgba(139, 148, 158, 0.2); /* 边框色 */
  --text-color: #c9d1d9;                  /* 主文字色 */
  --text-secondary-color: #8b949e;        /* 次要文字色 */
  --accent-color: #58a6ff;                /* 强调色 */
  --accent-glow: 0 0 15px rgba(88, 166, 255, 0.5); /* 发光效果 */
  --sidebar-width: 230px;                 /* 侧边栏宽度 */
}
```

## 🔧 高级配置

### 自定义图标
项目使用 Lucide 图标库，可以在配置中自定义图标：

```js
// 主分类图标
const categoryIcons = {
  '分类名称': 'lucide-icon-name'
};

// 二级分类图标
const subCategoryIcons = {
  '主分类': {
    '子分类': 'lucide-icon-name'
  }
};
```

### 数据结构说明
导航数据采用嵌套结构：

```js
let navData = {
  '主分类名称': {
    '子分类名称': [
      {
        title: '网站名称',
        desc: '网站描述信息',
        url: 'https://www.example.com',
        logoUrl: 'https://www.example.com/favicon.ico',
        keywords: '搜索关键词'
      }
    ]
  }
};
```

### 通知系统配置
通知系统支持成功和错误两种类型：

```js
// 显示成功通知
showNotification('操作成功！', 'success');

// 显示错误通知
showNotification('操作失败！', 'error');
```

### 本地存储键值
项目使用以下localStorage键值：

- `nav-custom-order`: 自定义排序数据
- `nav-favorites`: 收藏网站数据
- `nav-search-history`: 搜索历史记录
- `nav-user-settings`: 用户设置

## 📚 API 文档

### 核心方法

#### 搜索功能
```js
// 执行搜索
function performSearch(query);

// 清空搜索
function clearSearch();

// 高亮搜索结果
function highlightSearchResults(text, query);
```

#### 数据管理
```js
// 获取导航数据
function getNavData();

// 更新导航数据
function updateNavData(data);

// 添加新网站
function addNewSite(category, subcategory, siteData);

// 删除网站
function removeSite(category, subcategory, index);
```

#### 收藏功能
```js
// 添加收藏
function addToFavorites(siteData);

// 移除收藏
function removeFromFavorites(siteUrl);

// 获取收藏列表
function getFavorites();
```

#### 排序功能
```js
// 保存自定义排序
function saveCustomOrder(orderData);

// 加载自定义排序
function loadCustomOrder();

// 重置排序
function resetOrder();
```

### 事件系统

项目支持以下自定义事件：

```js
// 搜索事件
document.addEventListener('nav:search', function(e) {
  console.log('搜索查询:', e.detail.query);
});

// 收藏事件
document.addEventListener('nav:favorite', function(e) {
  console.log('收藏操作:', e.detail);
});

// 排序事件
document.addEventListener('nav:sort', function(e) {
  console.log('排序变更:', e.detail);
});
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

## ⚡ 性能优化

### 图片优化
- 使用 WebP 格式的图片以减少文件大小
- 为网站图标设置合适的缓存策略
- 考虑使用图片 CDN 服务

### 代码优化
```js
// 启用图片懒加载
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});
```

### 缓存策略
在服务器配置中添加缓存头：

```nginx
# Nginx 配置示例
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 性能监控
使用以下工具监控网站性能：
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

## 🌐 浏览器兼容性

### 支持的浏览器
| 浏览器 | 版本 | 支持状态 |
|--------|------|----------|
| Chrome | 60+ | ✅ 完全支持 |
| Firefox | 55+ | ✅ 完全支持 |
| Safari | 12+ | ✅ 完全支持 |
| Edge | 79+ | ✅ 完全支持 |
| IE | 11 | ⚠️ 部分支持 |

### 兼容性说明
- **现代浏览器**: 支持所有功能，包括拖拽、动画等
- **IE11**: 基本功能可用，部分CSS3效果可能不显示
- **移动浏览器**: 完全支持，针对触摸操作优化

### Polyfill 支持
如需支持更老的浏览器，可以添加以下 polyfill：

```html
<!-- 在 head 中添加 -->
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6,Array.prototype.includes,Object.assign"></script>
```

## 🔧 故障排除

### 常见问题

#### 1. 网站图标不显示
**问题**: 部分网站的图标无法加载
**解决方案**:
```js
// 在配置中添加备用图标
{
  title: '网站名称',
  logoUrl: 'https://www.example.com/favicon.ico',
  fallbackIcon: 'globe', // Lucide 图标作为备用
}
```

#### 2. 拖拽功能不工作
**问题**: 在某些设备上拖拽排序无效
**解决方案**:
- 检查是否正确引入 SortableJS
- 确认触摸事件没有被其他元素阻止
- 在移动设备上使用长按触发拖拽

#### 3. 搜索结果不准确
**问题**: 搜索无法找到预期的网站
**解决方案**:
- 检查网站的 keywords 字段是否包含相关关键词
- 确认搜索算法的匹配规则
- 考虑添加同义词支持

#### 4. 本地存储失效
**问题**: 用户设置无法保存
**解决方案**:
```js
// 检查 localStorage 可用性
function isLocalStorageAvailable() {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}
```

### 调试技巧

#### 开启调试模式
在浏览器控制台中运行：
```js
// 开启详细日志
window.DEBUG = true;

// 查看当前配置
console.log('Site Config:', siteConfig);
console.log('Nav Data:', navData);
```

#### 性能分析
```js
// 测量页面加载时间
window.addEventListener('load', function() {
  const loadTime = performance.now();
  console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
});
```

## 🔒 安全性考虑

### XSS 防护
- 所有用户输入都经过转义处理
- 使用 Content Security Policy (CSP)
- 避免使用 innerHTML 插入用户数据

### 数据验证
```js
// URL 验证示例
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
```

### 隐私保护
- 所有数据存储在用户本地
- 不收集用户个人信息
- 支持数据导出和删除

## 📱 移动端优化

### 触摸优化
- 增大点击区域 (最小44px)
- 优化拖拽手势
- 支持双指缩放

### 响应式断点
```css
/* 移动端优化 */
@media (max-width: 768px) {
  .nav-card {
    margin-bottom: 1rem;
  }
  
  .sidebar {
    transform: translateX(-100%);
  }
}
```

### PWA 支持
添加 manifest.json 实现 PWA 功能：

```json
{
  "name": "Tech-Nav",
  "short_name": "TechNav",
  "description": "科技风格导航网站",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0d1117",
  "theme_color": "#58a6ff",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

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

### 开发环境设置
1. Fork 并克隆项目
2. 创建功能分支
3. 安装开发依赖（如果有）
4. 进行开发和测试
5. 提交 Pull Request

### 代码规范
- 使用 2 空格缩进
- 遵循 ESLint 规则
- 添加必要的注释
- 保持代码简洁易读

## ❓ FAQ 常见问题

### Q: 如何添加自定义网站？
A: 编辑 `config/nav-config.js` 文件，在对应分类下添加网站信息：
```js
{
  title: '网站名称',
  desc: '网站描述',
  url: 'https://example.com',
  logoUrl: 'https://example.com/favicon.ico',
  keywords: '关键词'
}
```

### Q: 如何修改主题颜色？
A: 在 `index.html` 的 `:root` CSS 变量中修改 `--accent-color` 等颜色值。

### Q: 支持哪些图标？
A: 项目使用 Lucide 图标库，支持所有 Lucide 图标。查看 [Lucide 官网](https://lucide.dev/) 获取完整图标列表。

### Q: 如何备份我的配置？
A: 可以导出浏览器的 localStorage 数据，或者直接备份修改后的配置文件。

### Q: 网站在移动端显示异常怎么办？
A: 检查是否启用了响应式设计，确认 viewport meta 标签设置正确。

### Q: 如何禁用某些功能？
A: 在 `siteConfig.styleConfig` 中设置对应选项为 `false`。

### Q: 支持多语言吗？
A: 目前主要支持中文，可以通过修改配置文件实现其他语言支持。

### Q: 如何优化加载速度？
A: 
- 使用 CDN 加速静态资源
- 启用浏览器缓存
- 压缩图片资源
- 使用 WebP 格式图片

## 📋 更新日志

### v2.0.0 (2025-01-XX)
#### 新增功能
- ✨ 二级导航支持
- ✨ 收藏功能
- ✨ 通知系统
- ✨ 高级配置选项
- ✨ 主题定制功能

#### 改进优化
- 🎨 重新设计的用户界面
- ⚡ 性能优化和代码重构
- 📱 更好的移动端体验
- 🔧 更灵活的配置系统

#### Bug 修复
- 🐛 修复拖拽排序在某些浏览器下的问题
- 🐛 修复搜索高亮显示异常
- 🐛 修复移动端触摸事件冲突

### v1.5.0 (2024-12-XX)
#### 新增功能
- ✨ 拖拽排序功能
- ✨ 本地存储支持
- ✨ 搜索功能优化

#### 改进优化
- 🎨 界面美化和动画效果
- 📱 响应式设计改进

### v1.0.0 (2024-11-XX)
#### 初始版本
- 🎉 项目初始发布
- ✨ 基础导航功能
- 🎨 科技风格设计
- 📱 响应式布局

## 🔗 相关项目

### 类似项目
- [WebStack](https://github.com/WebStackPage/WebStackPage) - 静态响应式网址导航网站
- [Heimdall](https://github.com/linuxserver/Heimdall) - 应用程序仪表板和启动器
- [Homer](https://github.com/bastienwirtz/homer) - 静态主页配置

### 推荐工具
- [Lucide Icons](https://lucide.dev/) - 美观的图标库
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [SortableJS](https://sortablejs.github.io/Sortable/) - 拖拽排序库

### 设计灵感
- [Dribbble](https://dribbble.com/tags/dashboard) - 仪表板设计灵感
- [Behance](https://www.behance.net/) - 创意设计作品
- [UI Movement](https://uimovement.com/) - UI 动画灵感

## 👥 贡献者

感谢所有为项目做出贡献的开发者：

<a href="https://github.com/AhYi8/tech-nav/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AhYi8/tech-nav" />
</a>

### 特别感谢
- [@AhYi8](https://github.com/AhYi8) - 项目创建者和主要维护者
- 所有提交 Issue 和 PR 的贡献者
- 提供设计建议和反馈的用户

## 📞 联系方式

- **项目主页**: [GitHub Repository](https://github.com/AhYi8/tech-nav)
- **在线演示**: [https://nav.21zys.com](https://nav.21zys.com)
- **问题反馈**: [GitHub Issues](https://github.com/AhYi8/tech-nav/issues)
- **功能建议**: [GitHub Discussions](https://github.com/AhYi8/tech-nav/discussions)

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=AhYi8/tech-nav&type=Date)](https://star-history.com/#AhYi8/tech-nav&Date)

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
