// 首页配置
const siteConfig = {
  title: 'Tech-Nav - 导航网站',
  description: '精选优质网站导航，为您提供便捷的网站收藏和访问服务',
  keywords: '导航网站,网站收藏,工具导航,开发工具,设计资源,学习平台',
  sidebarHeader: {
    title: 'Tech-Nav',
    description: '精选网站导航'
  },
  copyright: 'Powered by @AhYi8 ✨ © 2025',
  // 样式和显示设置
  styleConfig: {
    showLogo: true,           // 是否显示网站LOGO，默认显示
    showSubCategoryIcons: true, // 是否显示二级导航图标，默认显示
    nav_card_columns: 4       // 导航卡片列数，默认4列
  }
};

// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
  '搜索引擎': 'search',
  '开发工具': 'code',
  '设计资源': 'palette',
  '学习平台': 'graduation-cap',
  '社交媒体': 'users',
  'AI集合': 'bot',
  '代理机场': 'globe'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
  '搜索引擎': {
    '通用搜索': 'search',
    '专业搜索': 'database'
  },
  '开发工具': {
    '代码托管': 'git-branch',
    '在线编辑器': 'code-2',
    '文档资源': 'book-open',
    '开发辅助': 'wrench'
  },
  '设计资源': {
    '设计工具': 'palette',
    '素材库': 'image',
    '图标字体': 'type'
  },
  '学习平台': {
    '编程学习': 'code',
    '在线课程': 'graduation-cap',
    '技术文档': 'file-text'
  },
  '社交媒体': {
    '社交网络': 'users',
    '即时通讯': 'message-square',
    '专业社交': 'briefcase'
  },
  'AI集合': {
    '对话模型': 'message-circle',
    'AI平台': 'cpu',
    'API平台': 'cpu'
  },
  '代理机场': {
    '机场推荐': 'plane',
    '客户端': 'download'
  }
};

let navData = {
  '搜索引擎': {
    '通用搜索': [
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
    '专业搜索': [
      {
        title: 'DuckDuckGo',
        desc: '一家让你能够无缝掌控在线个人信息的互联网隐私公司，而无需做出任何取舍。',
        url: 'https://duckduckgo.com',
        logoUrl: 'https://duckduckgo.com/favicon.ico',
        keywords: 'duck duckgo duckduckgo 隐私搜索'
      }
    ]
  },
  '开发工具': {
    '代码托管': [
      {
        title: 'GitHub',
        desc: '全球最大的代码托管平台，开发者协作的首选',
        url: 'https://github.com',
        logoUrl: 'https://github.com/favicon.ico',
        keywords: 'github git 代码 开发 版本控制'
      }
    ],
    '在线编辑器': [
      {
        title: 'CodePen',
        desc: '在线代码编辑器，前端开发和分享的平台',
        url: 'https://codepen.io',
        logoUrl: 'https://codepen.io/favicon.ico',
        keywords: 'codepen 在线编辑器 前端 demo'
      }
    ],
    '文档资源': [
      {
        title: 'MDN Web Docs',
        desc: 'Web开发者的权威文档和学习资源',
        url: 'https://developer.mozilla.org',
        logoUrl: 'https://developer.mozilla.org/favicon-48x48.png',
        keywords: 'mdn mozilla web 文档 前端'
      },
      {
        title: 'Stack Overflow',
        desc: '程序员问答社区，解决编程问题的最佳平台',
        url: 'https://stackoverflow.com',
        logoUrl: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico',
        keywords: 'stackoverflow 问答 编程 开发'
      }
    ],
    '开发辅助': [
      {
        title: 'Tech-Tools 工具箱',
        desc: '暗黑科技风格在线工具箱',
        url: 'https://tools.21zys.com',
        logoUrl: 'https://tools.21zys.com/favicon.ico',
        keywords: '工具箱 tools 工具'
      }
    ]
  },
  '设计资源': {
    '设计工具': [
      {
        title: 'Figma',
        desc: '协作式界面设计工具，团队设计的首选',
        url: 'https://www.figma.com',
        logoUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
        keywords: 'figma 设计 ui ux 协作'
      }
    ],
    '素材库': [
      {
        title: 'Dribbble',
        desc: '设计师作品展示和灵感分享平台',
        url: 'https://dribbble.com',
        logoUrl: 'https://cdn.dribbble.com/assets/favicon-452601365a822699d1d5db718ddf7499d036e8c2f7da69e85160a4d2f83534bd.ico',
        keywords: 'dribbble 设计 作品 灵感'
      },
      {
        title: 'Unsplash',
        desc: '高质量免费图片素材库',
        url: 'https://unsplash.com',
        logoUrl: 'https://unsplash.com/favicon-32x32.png',
        keywords: 'unsplash 图片 素材 免费 摄影'
      }
    ]
  },
  '学习平台': {
    '在线课程': [
      {
        title: 'Coursera',
        desc: '在线课程平台，提供大学级别的课程',
        url: 'https://www.coursera.org',
        logoUrl: 'https://www.coursera.org/favicon.ico',
        keywords: 'coursera 在线课程 学习 大学'
      },
      {
        title: 'Khan Academy',
        desc: '免费在线教育平台，涵盖多个学科',
        url: 'https://www.khanacademy.org',
        logoUrl: 'https://www.khanacademy.org/favicon.ico',
        keywords: 'khan academy 教育 学习 免费'
      }
    ],
    '编程学习': [
      {
        title: 'freeCodeCamp',
        desc: '免费编程学习平台，从零开始学编程',
        url: 'https://www.freecodecamp.org',
        logoUrl: 'https://www.freecodecamp.org/favicon-32x32.png',
        keywords: 'freecodecamp 编程 学习 免费'
      }
    ]
  },
  '社交媒体': {
    '社交网络': [
      {
        title: 'Twitter',
        desc: '实时信息分享和社交网络平台',
        url: 'https://twitter.com',
        logoUrl: 'https://twitter.com/favicon.ico',
        keywords: 'twitter 社交 微博 实时'
      },
      {
        title: 'Reddit',
        desc: '社区讨论平台，各种话题的聚集地',
        url: 'https://www.reddit.com',
        logoUrl: 'https://www.reddit.com/favicon.ico',
        keywords: 'reddit 社区 讨论 论坛'
      }
    ],
    '专业社交': [
      {
        title: 'LinkedIn',
        desc: '职业社交网络，建立专业人脉',
        url: 'https://www.linkedin.com',
        logoUrl: 'https://www.linkedin.com/favicon.ico',
        keywords: 'linkedin 职业 社交 求职'
      }
    ],
    '即时通讯': [
      {
        title: 'Telegram Web',
        desc: 'Telegram 网页版，实时消息传递和社交媒体',
        url: 'https://web.telegram.org',
        logoUrl: 'https://web.telegram.org/k/assets/img/logo_padded.svg',
        keywords: 'telegram 社交媒体 实时消息'
      }
    ]
  },
  'AI集合': {
    '对话模型': [
      {
        title: 'ChatGPT',
        desc: '基于OpenAI GPT模型的聊天机器人',
        url: 'https://chat.openai.com',
        logoUrl: 'https://chat.openai.com/favicon.ico',
        keywords: 'openai 人工智能 模型 服务'
      },
      {
        title: 'Gemini',
        desc: 'Google推出的基于AI的聊天模型',
        url: 'https://gemini.google.com',
        logoUrl: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png',
        keywords: 'google 人工智能 模型 服务'
      },
      {
        title: 'Grok',
        desc: 'Grok 是由马斯克创办的AI研究公司，致力于开发安全、有益的通用人工智能技术。',
        url: 'https://x.ai',
        logoUrl: 'https://x.ai/favicon.ico',
        keywords: 'grok xAi'
      }
    ],
    'AI平台': [
      {
        title: 'Google AI Studio',
        desc: 'Google推出的AI开发者平台',
        url: 'https://aistudio.google.com',
        logoUrl: 'https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png',
        keywords: 'google ai studio 开发者 平台'
      },
      {
        title: '硅基流动',
        desc: 'SiliconCloud 硅基流动云服务，高效、模型丰富、性价比高的大模型服务平台。',
        url: 'https://cloud.siliconflow.cn',
        logoUrl: 'https://cloud.siliconflow.cn/favicon.ico',
        keywords: 'siliconflow 大模型 ai 工具'
      },
      {
        title: '火山方舟',
        desc: '火山方舟是火山引擎推出的一站式AI研发平台，提供了丰富的AI模型和工具，帮助开发者快速构建AI应用。',
        url: 'https://console.volcengine.com',
        logoUrl: 'https://res.volccdn.com/obj/volc-console-fe/images/favicon.52bcaa41.png',
        keywords: '火山方舟 火山引擎 AI 模型 工具'
      }
    ],
    'API平台': [
      {
        title: 'OpenAI API',
        desc: 'OpenAI 提供的 API 接口，用于访问 GPT 模型等 AI 服务。',
        url: 'https://openai.com/api/',
        logoUrl: 'https://openai.com/favicon.ico',
        keywords: 'openai api 人工智能 模型 服务'
      },
      {
        title: 'GPT-GOD',
        desc: '一个综合API平台，提供了丰富的AI模型和工具，帮助开发者快速构建AI应用。每日签到奖励积分',
        url: 'https://gptgod.online/#/register?invite_code=5s7iq10ro9h3ex9augmeq3tnw',
        logoUrl: 'https://gptgod.online/favicon.ico',
        keywords: 'gpt-god api 人工智能 模型 服务'
      }
    ]
  },
  '代理机场': {
    '机场推荐': [
      {
        title: '一分机场',
        desc: '优点：价格低、流量多，有不限时流量。缺点：部分节点不稳定。',
        url: 'https://xn--4gqx1hgtfdmt.com/#/register?code=IxqdhHOg',
        logoUrl: 'https://xn--4gqx1hgtfdmt.com/favicon.ico',
        keywords: '机场 代理 节点 魔法'
      },
      {
        title: '性价比机场',
        desc: '优点：价格低、节点稳定。缺点：流量少，每月流量重置。',
        url: 'https://xn--6nq44r2uh9rhj7f.net/#/register?code=vPoik0NF',
        logoUrl: '../assert/ico/性价比机场.ico',
        keywords: '机场 代理 节点 魔法'
      }
    ],
    '客户端': [
      {
        title: 'Clash Verge',
        desc: 'Clash Verge 是一个基于 Clash 内核的 GUI 客户端，提供了丰富的功能和优化的性能。',
        url: 'https://github.com/clash-verge-rev/clash-verge-rev.git',
        logoUrl: '../assert/ico/clash-verge-rev.png',
        keywords: 'clash verge 代理 节点 魔法'
      }
    ]
  }
};