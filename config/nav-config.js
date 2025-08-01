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
    nav_card_columns: 4,      // 导航卡片列数，默认4列
    stickySearchBox: true     // 是否启用搜索框吸顶，默认启用
  }
};

// 类目图标配置（使用 Lucide 图标）
const categoryIcons = {
  '搜索引擎': 'search',
  '开发工具': 'code',
  'AI集合': 'bot',
  '代理机场': 'globe',
  '影视资源': 'video'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
  '搜索引擎': {
    '通用搜索': 'search'
  },
  '开发工具': {
    '开发辅助': 'wrench'
  },
  'AI集合': {
    '对话模型': 'message-circle',
    'AI平台': 'cpu',
    'API平台': 'cpu'
  },
  '代理机场': {
    '机场推荐': 'plane',
    '客户端': 'download'
  },
  '影视资源': {
    '影视推荐': 'list-video',
    '在线影视': 'play',
    '影视APP': 'tv-minimal-play'
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
      },
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
      },
      {
        title: 'Qwen',
        desc: 'Qwen Chat 提供全面的功能，包括聊天机器人、图像和视频理解、图像生成、文档处理、网页搜索集成、工具使用以及工件处理。',
        url: 'https://chat.qwen.ai',
        logoUrl: 'https://assets.alicdn.com/g/qwenweb/qwen-webui-fe/0.0.168/static/favicon.png',
        keywords: 'Qwen 通义千问 阿里'
      },
      {
        title: '通义',
        desc: '通义是一个通情、达义的国产AI模型，可以帮你解答问题、文档阅读、联网搜索并写作总结，最多支持1000万字的文档速读。通义_你的全能AI助手',
        url: 'https://www.tongyi.com',
        logoUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png',
        keywords: '通义千问 AI PPT AI搜索 AI写作'
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
  },
  '影视资源': {
    '影视推荐': [
      {
        title: '小范AI影单',
        desc: '小范AI影单，从此告别片荒',
        url: 'https://ai.yinfans.me',
        logoUrl: 'https://ai.yinfans.me/wp-content/uploads/2025/05/cropped-image-32x32.jpg',
        keywords: '小范AI 影单 影视推荐 电影'
      }
    ],
    '在线影视': [
      {
        title: 'LIBVIO',
        desc: 'LIBVIO提供免费观看最新电影热播电视剧，综艺，动漫，高清无广告蓝光1080P画质在线播放，流畅秒播不卡顿！',
        url: 'https://www.libvio.com',
        logoUrl: 'https://www.libvio.link/statics/img/favicon.ico',
        keywords: 'LIBVIO,影视,电影,电视剧'
      }
    ],
    '影视APP': [
      {
        title: '荐片影视',
        desc: 'Netflix、美剧、韩剧、动漫，全网资源永久免费，必备看片神器，专人维护，24小时影片动态，获取一手资源。',
        url: 'https://www.jianpian.com',
        logoUrl: 'https://www.jianpian14.com/assets/logo-CRQmaTEU.png',
        keywords: '荐片影视,Netflix,美剧,韩剧,动漫'
      }
    ]
  }
};