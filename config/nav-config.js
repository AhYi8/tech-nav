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
  '影视资源': 'video',
  '工具箱': 'drill'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
  '搜索引擎': {
    '通用搜索': 'search'
  },
  '编程开发': {
    '开发工具': 'hammer',
    '开源仓库': 'github',
    '开发辅助': 'wrench',
    '云服务器': 'server'
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
    '磁力影视': 'magnet',
    '影视APP': 'tv-minimal-play'
  },
  '工具箱': {
    '文件传输': 'folder-sync',
    '工具集合': 'square-scissors',
    '图片工具': 'image-up',
    '其他工具': 'cog',
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
    '开发工具': [
      {
        title: 'Reqable',
        desc: '借助一款功能强大的工具，该工具集成了HTTP(s)调试代理和REST客户端，支持Windows、Mac、Linux、Android和iOS系统，可助您提升API开发效率。',
        url: 'https://reqable.com',
        logoUrl: 'https://reqable.com/en-US/img/favicon.ico',
        keywords: 'api 调试 测试'
      }
    ],
    '开源仓库': [
      {
        title: 'awesome-selfhosted',
        desc: '一系列可在您自己的服务器上托管的自由软件网络服务和网络应用程序。',
        url: 'https://awesome-selfhosted.net',
        logoUrl: 'https://awesome-selfhosted.net/_static/logo.svg',
        keywords: 'selfhosted 自托管 自部署 开源仓库'
      },
      {
        title: 'RuoYi-Cloud',
        desc: '🎉 基于Spring Boot、Spring Cloud & Alibaba的分布式微服务架构权限管理系统，同时提供了 Vue3 的版本',
        url: 'https://ruoyi.vip',
        logoUrl: 'https://ruoyi.vip/images/ruoyi.png',
        keywords: 'RuoYi-Cloud SpringBoot SpringCloud 后台管理系统'
      },
      {
        title: 'AFFiNE',
        desc: 'AFFiNE.Pro 是一个开源的一体化工作空间，将文档编辑、白板绘图和项目规划完美融合在无限画布上，支持富文本、数据库、幻灯片等多种模块自由组合，配备多模态AI助手进行智能内容创作和格式转换，采用本地优先存储策略同时支持实时协作，用户可自托管部署，是Notion和Miro的强大开源替代方案。',
        url: 'https://github.com/toeverything/AFFiNE',
        logoUrl: 'https://github.githubassets.com/favicons/favicon-dark.png',
        keywords: 'AFFiNE 开源工作空间 一体化 无限画布 文档编辑 白板绘图 项目规划 多模态AI 本地优先 实时协作 自托管 Notion替代 Miro替代 知识管理 生产力工具 跨平台同步'
      },
      {
        title: 'MediaCrawler - 自媒体平台爬虫',
        desc: '多平台自媒体公开数据采集工具：支持小红书/抖音/快手/B站/微博/贴吧/知乎的笔记/帖子/视频及二级评论抓取，二维码登录保持登录态，关键词搜索、指定ID、创作者主页采集，支持SQLite/MySQL/CSV/JSON存储，代理池与词云分析，基于 Playwright，便于学习与研究使用。',
        url: 'https://github.com/NanmiCoder/MediaCrawler',
        logoUrl: 'https://github.githubassets.com/favicons/favicon-dark.png',
        keywords: '自媒体爬虫 多平台爬虫 小红书 抖音 快手 B站 微博 贴吧 知乎 评论采集 二级评论 关键词搜索 Playwright 登录态保持 IP代理池 数据存储 SQLite MySQL CSV JSON 词云 数据采集 Python 学习研究'
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
    ],
    '云服务器': [
      {
        title: '雨云',
        desc: '欢迎来到以用户体验为优先的雨云，我们提供稳定高速的云服务器、游戏云、物理服务器，强大的功能，高效率的客户支持，简洁易用的面板，值得您的信赖',
        url: 'https://www.rainyun.com/21zys_?s=nav',
        logoUrl: 'https://www.rainyun.com/favicon.ico',
        keywords: '雨云 虚拟主机 云服务器 我的世界服务器 游戏服务器 BGP 游戏云 MC VPS 高主频 免费主机 宝塔 美国vps 免费空间 便宜vps kvm EP主机 美国云服务器 免费CDN 香港CDN 免费二级域名 免费SSL证书 裸金属服务器 游戏云 云应用'
      }
    ]
  },
  '工具箱': {
    '文件传输': [
      {
        title: 'MuseTransfer',
        desc: '无需登录即可完成文件传输，10GB文件上传下载不限速、免费用，MuseTransfer文件传输工具就是快！',
        url: 'https://musetransfer.com',
        logoUrl: 'https://static.tezign.com/d13c7f1e7c041a549cd88b08ea7c3bff.jpeg',
        keywords: 'musetransfer 文件传输 文件上传 不限速 wetransfer 快传'
      },
      {
        title: 'Wormhole',
        desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件。 所以你可以确保你分享的文件私密且不会一直留在互联网上。</br>对于5GB以内的文件，Wormhole将在服务器上存储24小时。</br>对于大于5GB的文件，Wormhole使用点对点传输，直接从你的浏览器向接收者发送文件。所以你需要保持页面打开直到接收者下载完毕。',
        url: 'https://wormhole.app',
        logoUrl: '../assert/ico/logo-80x80.png',
        keywords: 'Wormhole 文件传输 文件上传 不限速 快传 端到端 加密传输'
      }
    ],
    '工具集合': [
      {
        title: 'Tech-Tools 工具箱',
        desc: '暗黑科技风格在线工具箱',
        url: 'https://tools.21zys.com',
        logoUrl: 'https://tools.21zys.com/favicon.ico',
        keywords: '工具箱 tools 工具'
      }
    ],
    '图片工具': [
      {
        title: 'SM.MS',
        desc: 'Image Upload - SM.MS - Simple Free Image Hosting',
        url: 'https://smms.app',
        logoUrl: 'https://smms.app/favicon-32x32.png',
        keywords: '图床 sm.ms smms.app 图片存储 图片外链 图片上传'
      },
      {
        title: 'ImgURL免费图床',
        desc: 'ImgURL免费图床上线于2017年12月，累积托管图片超过100万。ImgURL可以快速将图片转换为URL链接，为您提供简单、稳定、可信赖的图片上传于外链分享服务。',
        url: 'https://www.imgurl.org',
        logoUrl: 'https://www.imgurl.org/favicon.ico',
        keywords: 'imgurl 图床 图片外链 sm.ms 图片上传'
      },
      {
        title: '路过图床',
        desc: '路过图床, 免费公共图床, 提供图片上传和图片外链服务, 原图保存, 全球CDN加速.',
        url: 'https://imgse.com',
        logoUrl: 'https://imgse.com/content/images/system/favicon_1587118523486_91617a.png',
        keywords: '路过图床 图片外链 sm.ms 图片上传'
      },
      {
        title: '懒人图云',
        desc: '懒人图云是首家专注于照片组合拼图制作在线工具，集成三款照片拼图生成器，一款工具搞定所有照片拼接创意可视化需求；懒人图云致力于让照片拼图、照片墙、图标云生成、照片马赛克拼接制作更简单。',
        url: 'https://www.lanrentuyun.com',
        logoUrl: 'https://www.lanrentuyun.com/favicon.ico',
        keywords: '懒人图云 照片组合拼图 爱心照片拼图 照片马赛克拼接 照片墙制作'
      }
    ],
    '其他工具': [
      {
        title: '风鸟-企业查询平台',
        desc: '风鸟查询是一款信用查询监控平台，核心功能：查公司、查人员、查关系、企业查、查老赖，提供便捷的工商信用查询、企业信息报告下载、主体信用报告下载、风险预警监控、关联族谱查询、营业执照查询等服务。为您提供全国企业信息查询，包括企业工商信息查询，信用信息查询，经营状况查询等相关信息。',
        url: 'https://riskbird.com',
        logoUrl: 'https://riskbird.com/favicon.ico',
        keywords: '风鸟查询平台 查公司 查法人 企业信用 查企业 查人员 查关系 查老赖 企业查询 企业工商信息查询'
      }
    ]
  },
  'AI集合': {
    '对话模型': [
      {
        title: 'ChatGPT',
        desc: '基于OpenAI GPT模型的聊天机器人',
        url: 'https://chat.openai.com',
        logoUrl: 'https://cdn.oaistatic.com/assets/favicon-l4nq08hd.svg',
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
        logoUrl: 'https://cdn.oaistatic.com/assets/favicon-l4nq08hd.svg',
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
    '磁力影视': [
      {
        title: '电影天堂',
        desc: '最好的迅雷电影下载网，分享最新电影，高清电影、综艺、动漫、电视剧等下载！',
        url: 'https://dygod.org',
        logoUrl: 'https://dygod.org/favicon.ico',
        keywords: '免费电影下载 电影下载 最新电影 磁力影视'
      },
      {
        title: 'BT之家',
        desc: '分享快乐,如此简单 !  BT电影天堂-影视资源交流社区 , BT之家官网：1lOU.ME ，BT之家BTBTT，BT之家BTBBT，BTHome，BTHouse',
        url: 'https://www.1lou.cc',
        logoUrl: 'https://www.1lou.pro/view/img/favicon.ico',
        keywords: '磁力影视 磁力链接 BT之家'
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