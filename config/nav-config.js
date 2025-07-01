// 首页配置
const siteConfig = {
  title: 'Nav-Tools - 导航网站',
  description: '精选优质网站导航，为您提供便捷的网站收藏和访问服务',
  keywords: '导航网站,网站收藏,工具导航,开发工具,设计资源,学习平台',
  sidebarHeader: {
    title: 'Nav-Tools',
    description: '精选网站导航'
  },
  copyright: 'Powered by @AhYi8 ✨ © 2024'
};

// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
  '搜索引擎': 'search',
  '开发工具': 'code',
  '设计资源': 'palette',
  '学习平台': 'graduation-cap',
  '社交媒体': 'users'
};

let navData = {
  '搜索引擎': [
    {
      title: 'Google',
      desc: '全球最大的搜索引擎，提供网页、图片、视频等搜索服务',
      url: 'https://www.google.com',
      logoUrl: 'https://www.google.com/favicon.ico',
      keywords: 'google search 搜索 谷歌'
    },
    {
      title: 'Bing',
      desc: '微软推出的搜索引擎，提供智能搜索和AI功能',
      url: 'https://www.bing.com',
      logoUrl: 'https://www.bing.com/favicon.ico',
      keywords: 'bing microsoft 微软 搜索'
    },
    {
      title: '百度',
      desc: '中国最大的搜索引擎，提供中文搜索服务',
      url: 'https://www.baidu.com',
      logoUrl: 'https://www.baidu.com/favicon.ico',
      keywords: 'baidu 百度 搜索 中文'
    }
  ],
  '开发工具': [
    {
      title: 'GitHub',
      desc: '全球最大的代码托管平台，开发者协作的首选',
      url: 'https://github.com',
      logoUrl: 'https://github.com/favicon.ico',
      keywords: 'github git 代码 开发 版本控制'
    },
    {
      title: 'Stack Overflow',
      desc: '程序员问答社区，解决编程问题的最佳平台',
      url: 'https://stackoverflow.com',
      logoUrl: 'https://stackoverflow.com/favicon.ico',
      keywords: 'stackoverflow 问答 编程 开发'
    },
    {
      title: 'MDN Web Docs',
      desc: 'Web开发者的权威文档和学习资源',
      url: 'https://developer.mozilla.org',
      logoUrl: 'https://developer.mozilla.org/favicon-48x48.png',
      keywords: 'mdn mozilla web 文档 前端'
    },
    {
      title: 'CodePen',
      desc: '在线代码编辑器，前端开发和分享的平台',
      url: 'https://codepen.io',
      logoUrl: 'https://codepen.io/favicon.ico',
      keywords: 'codepen 在线编辑器 前端 demo'
    }
  ],
  '设计资源': [
    {
      title: 'Figma',
      desc: '协作式界面设计工具，团队设计的首选',
      url: 'https://www.figma.com',
      logoUrl: 'https://www.figma.com/favicon.ico',
      keywords: 'figma 设计 ui ux 协作'
    },
    {
      title: 'Dribbble',
      desc: '设计师作品展示和灵感分享平台',
      url: 'https://dribbble.com',
      logoUrl: 'https://dribbble.com/favicon.ico',
      keywords: 'dribbble 设计 作品 灵感'
    },
    {
      title: 'Unsplash',
      desc: '高质量免费图片素材库',
      url: 'https://unsplash.com',
      logoUrl: 'https://unsplash.com/favicon-32x32.png',
      keywords: 'unsplash 图片 素材 免费 摄影'
    }
  ],
  '学习平台': [
    {
      title: 'Coursera',
      desc: '在线课程平台，提供大学级别的课程',
      url: 'https://www.coursera.org',
      logoUrl: 'https://www.coursera.org/favicon.ico',
      keywords: 'coursera 在线课程 学习 大学'
    },
    {
      title: 'freeCodeCamp',
      desc: '免费编程学习平台，从零开始学编程',
      url: 'https://www.freecodecamp.org',
      logoUrl: 'https://www.freecodecamp.org/favicon.ico',
      keywords: 'freecodecamp 编程 学习 免费'
    },
    {
      title: 'Khan Academy',
      desc: '免费在线教育平台，涵盖多个学科',
      url: 'https://www.khanacademy.org',
      logoUrl: 'https://www.khanacademy.org/favicon.ico',
      keywords: 'khan academy 教育 学习 免费'
    }
  ],
  '社交媒体': [
    {
      title: 'Twitter',
      desc: '实时信息分享和社交网络平台',
      url: 'https://twitter.com',
      logoUrl: 'https://twitter.com/favicon.ico',
      keywords: 'twitter 社交 微博 实时'
    },
    {
      title: 'LinkedIn',
      desc: '职业社交网络，建立专业人脉',
      url: 'https://www.linkedin.com',
      logoUrl: 'https://www.linkedin.com/favicon.ico',
      keywords: 'linkedin 职业 社交 求职'
    },
    {
      title: 'Reddit',
      desc: '社区讨论平台，各种话题的聚集地',
      url: 'https://www.reddit.com',
      logoUrl: 'https://www.reddit.com/favicon.ico',
      keywords: 'reddit 社区 讨论 论坛'
    }
  ]
};

const styleConfig = {
  nav_card_columns: 4
};