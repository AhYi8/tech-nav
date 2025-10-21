// 首页配置
const siteConfig = {
  title: 'Tech-Nav - 全能技术与资源导航中心',
  description: 'Tech-Nav - 您的终极技术与资源导航中心。本站致力于为开发者、学生及所有科技爱好者，提供一个全面、详细且持续更新的网站资源库。我们精心收录了【编程开发】领域的各类实用工具，涵盖API调试、公共API接口、精选Github开源项目（如微服务框架、自托管应用）、云服务器(VPS)与开发辅助工具；紧跟时代潮流，聚合了丰富的【AI集合】，包括ChatGPT、Gemini、Claude、Kimi等前沿对话模型、专业的AI提示词(Prompt)管理平台、AI绘画与视频生成工具，以及面向开发者的大模型API服务；此外，还提供强大的【在线工具箱】（文件传输、免费图床、格式转换、企业查询等）、海量的【影视与网盘资源】（在线观看、磁力BT下载、多网盘资源搜索）、优质的【学习教育】平台和活跃的【在线技术社区】。无论您是寻找开发灵感、探索AI应用，还是需要日常实用工具，Tech-Nav都将是您最高效的一站式资源入口和上网主页。',
  keywords: '网站导航,技术导航,网址大全,资源导航,程序员导航,开发者主页,编程开发,开发工具,开发者工具,API,API接口,API调试,公共API,开源项目,开源仓库,Github,自托管,Self-Hosted,微服务,Spring Boot,后台管理,爬虫,数据采集,云服务器,VPS,学习教育,在线课程,AI,AI工具,AIGC,人工智能,AI集合,大语言模型,LLM,ChatGPT,OpenAI,Gemini,Claude,Kimi,通义千问,天工AI,AI提示词,Prompt,AI绘画,AI视频,AI写作,代理,网络工具,Clash,网盘资源,资源搜索,夸克网盘,阿里云盘,百度网盘,影视资源,在线影视,电影下载,美剧,韩剧,动漫,BT下载,磁力链接,工具箱,在线工具,文件传输,图床,格式转换,下载工具,YouTube下载,在线社区,技术论坛,Discourse,Reddit,Tech-Nav',
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
  '编程开发': 'code',
  '学习教育': 'graduation-cap',
  'AI集合': 'bot',
  '代理机场': 'globe',
  '网盘资源': 'cloud',
  '图片资源': 'image',
  '影视资源': 'video',
  '工具箱': 'drill',
  '在线社区': 'send'
};

// 二级导航配置（嵌套结构，与navData结构保持一致）
const subCategoryIcons = {
  '搜索引擎': {
    '通用搜索': 'search',
    '网盘搜索': 'cloud',
    '通用导航': 'compass'
  },
  '编程开发': {
    '开发工具': 'hammer',
    '开源仓库': 'github',
    '开发辅助': 'wrench',
    '云服务': 'server'
  },
  '学习教育': {
    '学习平台': 'school'
  },
  'AI集合': {
    'AI提示词': 'book-text',
    'AI教程': 'calendar-days',
    '对话模型': 'message-circle',
    '媒体生成': 'cassette-tape',
    'API平台': 'cpu'
  },
  '代理机场': {
    '机场推荐': 'plane',
    '客户端': 'download'
  },
  '网盘资源': {
    '资源搜索': 'search'
  },
  '图片资源': {
    '素材资源': 'image-down',
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
    '转换工具': 'repeat',
    '下载工具': 'download'
  },
  '在线社区': {
    'Discourse': "message-circle",
    'Reddit': 'cat'
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
        keywords: 'google search 搜索 谷歌',
        highlight: false,
        recommended: false
      },
      {
        title: 'Bing',
        desc: '微软推出的搜索引擎，提供智能搜索和AI功能',
        url: 'https://www.bing.com',
        logoUrl: 'https://www.bing.com/favicon.ico',
        keywords: 'bing microsoft 微软 搜索',
        highlight: false,
        recommended: false
      },
      {
        title: '百度',
        desc: '中国最大的搜索引擎，提供中文搜索服务',
        url: 'https://www.baidu.com',
        logoUrl: 'https://www.baidu.com/favicon.ico',
        keywords: 'baidu 百度 搜索 中文',
        highlight: false,
        recommended: false
      },
      {
        title: 'DuckDuckGo',
        desc: '一家让你能够无缝掌控在线个人信息的互联网隐私公司，而无需做出任何取舍。',
        url: 'https://duckduckgo.com',
        logoUrl: 'https://duckduckgo.com/favicon.ico',
        keywords: 'duck duckgo duckduckgo 隐私搜索',
        highlight: false,
        recommended: false
      }
    ],
    '网盘搜索': [
      {
      "title": "伏羲盘 - 夸克、百度、阿里网盘",
      "desc": "伏羲盘是一个汇总国内多种网盘（夸克、阿里云盘、百度网盘等）第三方资源搜索引擎的网站导航页，集中展示各搜索站的特点与优劣，包括资源丰富度、新旧程度、失效率、是否需注册或扫码、是否有广告/VIP限制、搜索速度与体验等，方便用户快速挑选合适的网盘资源搜索入口。",
      "url": "https://fuxipan.com",
      "logoUrl": "https://fuxipan.com/favicon.ico",
      "keywords": "伏羲盘 网盘 搜索引擎 夸克网盘 阿里云盘 百度网盘 资源 聚合 导航 失效链接 注册限制 VIP 广告"
      }
    ],
    '通用导航': [
      {
        "title": "币圈导航 - 区块链导航 - WEB3导航",
        "desc": "聚合币圈交易所、行情工具、空投资讯、DeFi入口及行业动态的一站式区块链资源门户网站，提供区块链、加密货币、投资理财等相关书籍和资源",
        "url": "https://www.0xnav.com",
        "logoUrl": "https://www.0xnav.com/wp-content/uploads/2025/05/1746240622-0xnav_logo_favicon.png",
        "keywords": "区块链 币圈 WEB3 导航 交易所 行情工具 空投 DeFi 加密货币 比特币 投资 金融 巴菲特 黑天鹅 反脆弱 魔鬼经济学"
      }
    ]
  },
  '编程开发': {
    '开发工具': [
      {
        title: 'Reqable',
        desc: '借助一款功能强大的工具，该工具集成了HTTP(s)调试代理和REST客户端，支持Windows、Mac、Linux、Android和iOS系统，可助您提升API开发效率。',
        url: 'https://reqable.com',
        logoUrl: 'https://reqable.com/en-US/img/favicon.ico',
        keywords: 'api 调试 测试',
        highlight: false,
        recommended: false
      },
      {
        "title": "Public APIs | 免费和公共 API 的目录",
        "desc": "收录 15k+ 免费与公共 API，按开发、新闻、游戏、地理编码、金融、加密货币、政府开放数据、图像与视频处理、机器学习、社交、体育、云存储等多类别分类，支持多语言与多场景集成，方便开发者快速检索与接入。",
        "url": "https://publicapis.io/",
        "logoUrl": "https://c1.tablecdn.com/pa/publicapis-logo.png",
        "keywords": "免费 公共 API 目录 开发 数据 新闻 游戏 地理编码 金融 加密货币 开放数据 图像 视频 机器学习 社交 体育 云存储 工具 集成"
      }
    ],
    '开源仓库': [
      {
        "title": 'awesome-selfhosted',
        "desc": '一系列可在您自己的服务器上托管的自由软件网络服务和网络应用程序。',
        "url": 'https://awesome-selfhosted.net',
        "logoUrl": 'https://awesome-selfhosted.net/_static/logo.svg',
        "keywords": 'selfhosted 自托管 自部署 开源仓库',
        "highlight": false,
        "recommended": false
      },
      {
        "title": 'RuoYi-Cloud',
        "desc": '🎉 基于Spring Boot、Spring Cloud & Alibaba的分布式微服务架构权限管理系统，同时提供了 Vue3 的版本',
        "url": 'https://ruoyi.vip',
        "logoUrl": 'https://ruoyi.vip/images/ruoyi.png',
        "keywords": 'RuoYi-Cloud SpringBoot SpringCloud 后台管理系统',
        "highlight": false,
        "recommended": false
      },
      {
        "title": 'AFFiNE',
        "desc": 'AFFiNE.Pro 是一个开源的一体化工作空间，将文档编辑、白板绘图和项目规划完美融合在无限画布上，支持富文本、数据库、幻灯片等多种模块自由组合，配备多模态AI助手进行智能内容创作和格式转换，采用本地优先存储策略同时支持实时协作，用户可自托管部署，是Notion和Miro的强大开源替代方案。',
        "url": 'https://github.com/toeverything/AFFiNE',
        "logoUrl": 'https://github.githubassets.com/favicons/favicon-dark.png',
        "keywords": 'AFFiNE 开源工作空间 一体化 无限画布 文档编辑 白板绘图 项目规划 多模态AI 本地优先 实时协作 自托管 Notion替代 Miro替代 知识管理 生产力工具 跨平台同步'
      },
      {
        "title": 'MediaCrawler - 自媒体平台爬虫',
        "desc": '多平台自媒体公开数据采集工具：支持小红书/抖音/快手/B站/微博/贴吧/知乎的笔记/帖子/视频及二级评论抓取，二维码登录保持登录态，关键词搜索、指定ID、创作者主页采集，支持SQLite/MySQL/CSV/JSON存储，代理池与词云分析，基于 Playwright，便于学习与研究使用。',
        "url": 'https://github.com/NanmiCoder/MediaCrawler',
        "logoUrl": 'https://github.githubassets.com/favicons/favicon-dark.png',
        "keywords": '自媒体爬虫 多平台爬虫 小红书 抖音 快手 B站 微博 贴吧 知乎 评论采集 二级评论 关键词搜索 Playwright 登录态保持 IP代理池 数据存储 SQLite MySQL CSV JSON 词云 数据采集 Python 学习研究'
      },
      {
        "title": "res-downloader | 爱享素材下载器",
        "desc": "基于 Go + Wails 的跨平台网络资源嗅探与下载工具，支持视频/音频/图片/m3u8/直播流等多平台资源（微信视频号、小程序、抖音、快手、小红书、酷狗音乐、QQ音乐等），提供代理抓包与资源筛选展示。",
        "url": "https://github.com/putyy/res-downloader",
        "logoUrl": "https://github.com/putyy/res-downloader/raw/master/build/appicon.png",
        "keywords": "Go Wails 资源下载 嗅探 抓包 代理 跨平台 Windows macOS Linux 视频 音频 图片 m3u8 直播 流媒体 微信视频号 小程序 抖音 快手 小红书 酷狗 QQ音乐 i18n 下载器"
      },
      {
        "title": "MediaCrawler - 自媒体平台爬虫",
        "desc": "基于 Playwright 的多平台自媒体数据采集工具，支持小红书、抖音、快手、B站、微博、贴吧、知乎等主流平台的公开信息抓取，无需JS逆向，支持关键词搜索、指定帖子爬取、评论获取、创作者主页等功能。</br>🎯 核心功能升级</br>✅ 断点续爬功能（重点特性）</br>✅ 多账号 + IP代理池支持（重点特性）</br>✅ 去除 Playwright 依赖，使用更简单</br>✅ 完整 Linux 环境支持</br>🏗️ 架构设计优化</br>✅ 代码重构优化，更易读易维护（解耦 JS 签名逻辑）</br>✅ 企业级代码质量，适合构建大型爬虫项目</br>✅ 完美架构设计，高扩展性，源码学习价值更大</br>🎁 额外功能</br>✅ 自媒体视频下载器桌面端（适合学习全栈开发）</br>✅ 多平台首页信息流推荐（HomeFeed）</br>基于自媒体平台的AI Agent正在开发中 🚀🚀",
        "url": "https://github.com/NanmiCoder/MediaCrawler",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "爬虫 自媒体 小红书 抖音 快手 B站 微博 贴吧 知乎 Playwright 数据采集 评论爬取 Python"
      },
      {
        "title": "AFFiNE - 集写作、绘图、规划于一体",
        "desc": "注重隐私、本地优先的开源替代方案，可替代Notion和Miro。为富有创造力的思维提供超融合平台，结合文档、画布和表格，配备多模态AI助手、实时协作和自托管功能。",
        "url": "https://github.com/toeverything/AFFiNE",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "notion替代品 miro替代品 知识库 白板 画布 文档 协作 本地优先 隐私保护 开源 自托管 多模态AI 实时同步 跨平台 生产力 工作空间 编辑器 块编辑 typescript react electron"
      },
      {
        "title": "BillionMail",
        "desc": "未来的开源邮件服务器和电子邮件营销平台，提供完全控制的邮件营销解决方案，支持高级分析、客户管理、无限发送和自托管部署</br>主要特性：</br>✅无需依赖 SMTP 中继，开箱即用，告别繁琐配置</br>✅强大可视化管理界面，任务调度、数据追踪、内容编辑一站式搞定，远超 “简单功能”</br>✅抗封号智能策略，避开 SaaS 常见的封号雷区</br>✅多任务并发处理，同时管理多个邮件 campaign 互不干扰</br>✅高度可定制化，发件频率、内容模板、目标筛选独立配置",
        "url": "https://github.com/aaPanel/BillionMail",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "开源 邮件服务器 电子邮件营销 营销平台 自托管 Docker RoundCube 邮件分析 AGPLv3 aaPanel"
      },
      {
        "title": "Prompt Optimizer - AI提示词优化器",
        "desc": "一款强大的AI提示词优化工具，支持多轮迭代改进、多模型集成、实时对比测试。提供Web应用、桌面应用、Chrome插件和Docker部署四种使用方式，帮助用户编写更高质量的AI提示词，提升AI输出效果。",
        "url": "https://github.com/linshenkx/prompt-optimizer",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "AI 提示词 优化器 prompt OpenAI Gemini DeepSeek 智谱AI SiliconFlow MCP 角色扮演 知识图谱 Docker Chrome插件 桌面应用 Web应用",
        "recommended": true
      },
      {
        "title": "LiYing - 自动化证件照处理程序",
        "desc": "LiYing 是一套适用于自动化完成一般照相馆后期证件照处理流程的照片自动处理程序。支持人体、人脸自动识别，角度自动纠正，自动更换任意背景色，任意尺寸证件照自动裁切，并自动排版。完全离线运行，所有图像处理操作都在本地执行。",
        "url": "https://github.com/aoguai/LiYing",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "证件照 自动化 图像处理 人脸识别 背景替换 照片裁切 离线处理 Python ONNX WebUI 照相馆 后期处理"
      },
      {
        "title": "Gemini API 负载均衡器 (gemini-balance-do)",
        "desc": "部署在 Cloudflare Workers 上的 Gemini API 负载均衡器和代理服务，使用 Durable Objects 存储管理 API 密钥，提供 OpenAI API 兼容接口，支持多密钥轮询负载均衡和流式响应",
        "url": "https://github.com/zaunist/gemini-balance-do",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "Gemini API 负载均衡 Cloudflare Workers 代理服务 OpenAI兼容 API密钥管理 流式响应 Durable Objects SQLite"
      },
      {
        "title": "enhanced-FaaS-in-China",
        "desc": "通过修改CNAME记录提升部署在Cloudflare、Vercel或Netlify的网页在中国的访问速度和稳定性，支持三网优化和智能路线解析",
        "url": "https://github.com/xingpingcn/enhanced-FaaS-in-China",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "cloudflare vercel netlify 加速 优选IP 中国 国内 境内 大陆 CDN DNS CNAME 网站加速 FaaS",
        "recommended": true
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
    '云服务': [
      {
        "title": "UCloud优刻得",
        "desc": "<strong>香港云主机低至 51元/年 | 2H4G30M 云主机 140元/年</strong></br>UCloud(优刻得)是中国知名的中立云计算服务商，科创板上市(股票代码：688158)，中国云计算第一股，专注于提供可靠的企业级云服务，包括云服务器、云主机、云数据库、混合云、CDN、人工智能等服务",
        "url": "https://passport.ucloud.cn?cps_code=BTpCaaSSjDlCI7Tp5dZzZ8",
        "logoUrl": "	https://www.ucloud.cn/favicon.ico",
        "keywords": "云主机、云数据库、混合云、CDN、云计算、UCloud、优刻得、云服务器、互联网+解决方案、人工智能、全球服解决方案",
        "highlight": true,
        "recommended": true
      },
      {
        "title": '雨云',
        "desc": '欢迎来到以用户体验为优先的雨云，我们提供稳定高速的云服务器、游戏云、物理服务器，强大的功能，高效率的客户支持，简洁易用的面板，值得您的信赖',
        "url": 'https://www.rainyun.com/21zys_?s=nav',
        "logoUrl": 'https://www.rainyun.com/favicon.ico',
        "keywords": '雨云 虚拟主机 云服务器 我的世界服务器 游戏服务器 BGP 游戏云 MC VPS 高主频 免费主机 宝塔 美国vps 免费空间 便宜vps kvm EP主机 美国云服务器 免费CDN 香港CDN 免费二级域名 免费SSL证书 裸金属服务器 游戏云 云应用'
      },
      {
        "title": "SQLPub | 免费 MySQL 云数据库",
        "desc": "提供最新MySQL服务器测试服务的平台，支持免费注册和在线管理，邮箱注册，一个邮箱只能有创建一个 MySQL 数据库。免费额度：最大36000次/小时的请求、同时30个连接和500M存储空间；",
        "url": "https://sqlpub.com",
        "logoUrl": "https://sqlpub.com/favicon.ico",
        "keywords": "MySQL 云数据库 免费"
      },
      {
        "title": "官方免费 Redis 云数据库",
        "desc": "Redis 官方免费云数据库，免费空间 30 MB。",
        "url": "https://redis.io",
        "logoUrl": "https://redis.io/favicon.ico",
        "keywords": "Redis 云数据库 免费"
      },
      {
        "title": "官方免费 MongoDB 云数据库",
        "desc": "MongoDB 官方免费云数据库，免费空间 500 MB。",
        "url": "https://www.mongodb.com",
        "logoUrl": "https://www.mongodb.com/favicon.ico",
        "keywords": "MongoDB 云数据库 免费"
      },
      {
        "title": "ClawCloud Run",
        "desc": "提供首次注册$5积分奖励和每月$5积分福利的云服务平台，支持Github和Gmail用户注册",
        "url": "https://ap-southeast-1.run.claw.cloud/signin",
        "logoUrl": "https://ap-southeast-1.run.claw.cloud/icons/favicon-32x32.png",
        "keywords": "ClawCloud 云服务 免费 应用部署"
      }
    ]
  },
  '学习教育': {
    '学习平台': [
      {
        "title": "国家高等教育智慧教育平台",
        "desc": "全国性、综合性在线开放课程平台，由教育部委托、高等教育出版社建设和运行维护，北京理工大学提供技术支持，于2022年3月上线，为高校师生和社会学习者提供高效便捷的教与学服务。",
        "url": "https://www.chinaooc.com.cn",
        "logoUrl": "../assert/ico/国家高等教育智慧教育平台.png",
        "keywords": "高等教育 在线课程 教育资源 国家级平台 智慧教育 教学服务 高校师生 社会学习者 教育部 高教社 北京理工"
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
        desc: 'Wormhole 让你能以端到端加密和自动过期链接的方式分享文件。 所以你可以确保你分享的文件私密且不会一直留在互联网上。</br></br>对于5GB以内的文件，Wormhole将在服务器上存储24小时。</br><br>对于大于5GB的文件，Wormhole使用点对点传输，直接从你的浏览器向接收者发送文件。所以你需要保持页面打开直到接收者下载完毕。',
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
        "title": '风鸟-企业查询平台',
        "desc": '风鸟查询是一款信用查询监控平台，核心功能：查公司、查人员、查关系、企业查、查老赖，提供便捷的工商信用查询、企业信息报告下载、主体信用报告下载、风险预警监控、关联族谱查询、营业执照查询等服务。为您提供全国企业信息查询，包括企业工商信息查询，信用信息查询，经营状况查询等相关信息。',
        "url": 'https://riskbird.com',
        "logoUrl": 'https://riskbird.com/favicon.ico',
        "keywords": '风鸟查询平台 查公司 查法人 企业信用 查企业 查人员 查关系 查老赖 企业查询 企业工商信息查询'
      },
      {
        "title": "Superthread - 项目管理协作平台",
        "desc": "一个功能丰富的项目管理和团队协作平台，提供看板管理、任务跟踪、页面创建、会议转录、键盘快捷键等功能，支持从 Trello、Jira、Shortcut 导入任务，适合团队协作和项目管理。",
        "url": "https://app.superthread.com",
        "logoUrl": "https://app.superthread.com/img/icons/favicon-32x32.png",
        "keywords": "项目管理 团队协作 看板 任务管理 笔记 工作区 路线图 会议转录 导入任务 键盘快捷键 Trello Jira Shortcut 工作流"
      }
    ],
    '转换工具': [
      {
        title: 'Convertio',
        desc: 'Convertio - 在线转换文件的简单工具。支持超过309种不同的文档、图像、电子表格、电子书、文档、演示文稿、音频和视频格式。',
        url: 'https://convertio.co',
        logoUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDY1NDg3RDc3N0JFODExODNENjlCOEE4NDIwQ0ZCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNzIyRUYxOUU2OEMxMUU5OENDMkRGRDY2MUEyMUNEMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNzIyRUYxOEU2OEMxMUU5OENDMkRGRDY2MUEyMUNEMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBBQzRBRDc4OEJFNkU5MTE5RDNFOEE4MDBCRkY0NDZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NjU0ODdENzc3QkU4MTE4M0Q2OUI4QTg0MjBDRkIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6G+jpQAAA/9JREFUeNq0V1lIlFEU/kZbjPYkEysospJGbBW1KAgX2qCHFIpepOVBBFHBpiQiIjIXFIveUiIhCcqXVoPqoZ0CM1qgtB5EsEItNR2TtHO8d3Lm/8//z6/pgY9h/nvvOd+992zXNbR+PRzKDMJOwlbCGsJSwmw99pPwhfCa8JBwi9DjRKnLAYFogoewjzDdIdlfhFpCMaHJbmKIzVgY4SzhHeHQKIxDzz2k1xZrXaMisIzwTO98CsYuvPaI1hVtT+DVKwVgHeGJvufxEtb1eFj3iB3hBDZsYJZ3CQsw/rJgWLeyITrhNH1Uq23VREQACQnA8uVAeDjw5w/Q0QG8eaN21tUVjAhNRCKhj/9M8hs4aWvc5QJSU4H0dMDtBqZONc/p7QWuXQOqqykILaMwTtvy+J8AO90HwmRnGYFSQloacOAAEBlpHm9tBXJzKTN8sdIwQFjFIerzgaOWxtlYUlLgN95dXR2QkQHU15vXLFwIXLigrkuWydrmsBPO1ElGmEbzSkuB8nIgPt483kfXePw4cOWK7CsVFUBoqBWJvWybCewQkwzf+YkTyrCPSEyMWc3QkDJ05455bOVK2to+u2S1gwkki8PZ2cD27YFXcf48sHixTKKoCPj2zTx2+DDtc6YVieQQ7ZWBwp6emWmePncucO6c+pUioLZW2CdtNCXFMiJCdASMCO/a47GOAD4BPvIwIb03NMhrOG9YpHwmMOvfX75vvne+fzuJjQXOnCEXNpSSzk55flSUlaZZnAf6xYJz+TJF6irzkt27VZz/S+ZEoqwM2LIleP4YoPDPyQFevvR9+c1bkHOnvxF/mTcv8P/gIFBYCLx9a2+c55065W+cpYsJNIsLHj2SFa1da/7m9QJ5eUBLizWBkhIpVJtDdHEwy4MHQHe3+fv+/cqzjcL3z8cr+cGlS6pGCIWJCdwXCfCuamrM37kCHjsmOyqfQFZWYCHiXXNaluU+E7itezizMIGPH83ft20D8vNlEk3UAhYUKIfj++Z750QlZA627auGFwkHRRKLFgFVVWrnRrl3Dzh9WiUho3ABa2yUx5RUcd/oI8BdynvLirhkCVBZqaqcUdraVP1nMj2OOnFfOaamAp9CT6ok0aH7/k3i9B8/gBs3VMyvWKGKk3+N2LxZFZ1EanT6Ka18/hyMAJVXXJVasudibTDmdk6tcXEqJzCp9nZ19y9eyAXJ3JIlaR/wI8D9nGoYnxLmY2LkO2Ej2WoiW0JXzAPk44SvE2D867BuZSPo04xP4nrQ63AufOx7pGea1cuIJ3INLdEeO1YZ0DoSrN6Idm9Dr26d3TpP9I7CcJ+Oc7fW4f2f17H/83yX4Xk+xxeohuf5TafP878CDADrJR+o7JYu7QAAAABJRU5ErkJggg==',
        keywords: '文件转换 在线转换工具'
      }
    ],
    '下载工具': [
      {
        title: 'Yt1d | YouTube视频分析、下载',
        desc: '在线YouTube视频分析与下载工具，支持最高8K分辨率视频技术参数查看，多格式（视频/音频/图片）解析，快速获取编码、格式等信息，面向教育与学习场景。',
        url: 'https://yt1d.top',
        logoUrl: 'https://yt1d.top/favicon.ico',
        keywords: 'YouTube 视频 下载 分析 8K 技术参数 多格式 MP4 WebM AVI MKV MOV FLV MP3 AAC WAV FLAC OGG M4A JPG PNG WebP BMP 在线 工具'
      }
    ]
  },
  'AI集合': {
    'AI提示词': [
      {
        "title": "AiShort - 智能体与提示词平台",
        "desc": "AiShort 是一个聚合多领域 AI 智能体与高质量提示词的生产力平台，支持提示词管理与收藏，覆盖写作辅助、论文与报告、IT/编程、AI 应用、生活提升、趣味知识、自助百科、心理社交、哲学宗教、发散思维、教育/学生、学术/教师、游戏、工具、终端/解释器、语言/翻译、辩论/演讲、点评评鉴、文本处理、企业职能、SEO、医疗咨询、金融顾问、音乐及行业顾问等分类，并提供新闻写作、学术论文生成、观点评论、文本相似度分析、稿件期刊匹配、根据摘要生成题目等智能模板及社区精选内容，帮助用户一键提升创作与研究效率。",
        "url": "https://www.aishort.top",
        "logoUrl": "https://www.aishort.top/img/logo.svg",
        "keywords": "AiShort AI 智能体 提示词 平台 生产力 提示词管理 收藏 写作辅助 论文 文章 报告 IT 编程 文本处理 相似度 算法 学术 记者 评论 观点生成 标题生成 期刊匹配 SEO 教育 学术教师 学生 工具 终端 翻译 企业 医疗 金融 顾问 音乐 行业 社区精选 发散思维 心理 社交 哲学 知识库"
      },
      {
        "title": "AI咖 - 专业的AI提示词管理平台",
        "desc": "AI咖提供专业的AI提示词管理系统，帮助您高效管理、创建、编辑和分享ChatGPT、Claude等大模型提示词。提升AI对话效率，实现智能创作与提示词管理，同时提供配套的浏览器插件和MCP服务，极大提升提示词的应用效率。",
        "url": "https://aiprompter.cc",
        "logoUrl": "https://www.aiprompter.cc/images/icons/icon128.png",
        "keywords": "AI提示词 提示词管理 Prompt管理 ChatGPT Claude AI对话 AI工具 人工智能 创作助手 提示词模板 提示词收藏 AI助手 智能创作 浏览器插件 MCP服务 提示词分享 AI咖"

      },
      {
        "title": "学习方法论 – 方法论大全，系统学习方法论",
        "desc": "方法论大全，收录各类方法论、思维模型与实用技巧，帮助你更清晰地思考、更高效地学习、并高质量地解决问题。",
        "url": "https://thinking.jimbray.xyz/zh",
        "logoUrl": "https://thinking.jimbray.xyz/favicon.ico",
        "keywords": "问题解决, 战略规划, MECE 原则, 7S 框架, STAR 面试法, 整合思维, 杠杆思维"
      }

    ],
    '对话模型': [
      {
        title: 'Gemini',
        desc: 'Google推出的基于AI的聊天模型',
        url: 'https://gemini.google.com',
        logoUrl: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png',
        keywords: 'google 人工智能 模型 服务',
        highlight: true,
        recommended: false
      },
      {
        title: '豆包',
        desc: '国内最强模型。豆包是你的 AI 聊天智能对话问答助手，写作文案翻译编程全能工具。豆包为你答疑解惑，提供灵感，辅助创作，也可以和你畅聊任何你感兴趣的话题。',
        url: 'https://www.doubao.com',
        logoUrl: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        keywords: '豆包 AI对话 AI聊天 AI写作 AIGC AI AI图片生成',
        highlight: true,
        recommended: false
      },
      {
        title: 'Google AI Studio',
        desc: 'Google推出的AI开发者平台',
        url: 'https://aistudio.google.com',
        logoUrl: 'https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png',
        keywords: 'google ai studio 开发者 平台'
      },
      {
        title: 'ChatGPT',
        desc: '基于OpenAI GPT模型的聊天机器人',
        url: 'https://chat.openai.com',
        logoUrl: 'https://cdn.oaistatic.com/assets/favicon-l4nq08hd.svg',
        keywords: 'openai 人工智能 模型 服务'
      },
      {
        title: 'Grok',
        desc: 'Grok 是由马斯克创办的AI研究公司，致力于开发安全、有益的通用人工智能技术。',
        url: 'https://x.ai',
        logoUrl: 'https://x.ai/favicon.ico',
        keywords: 'grok xAi'
      },
      {
        "title": "Claude AI",
        "desc": "Claude 是由 Anthropic 打造的新一代 AI 助手，强调安全、准确与隐私保护，提供代码生成、数据可视化、文本与图像分析、内容创作、研究辅助及多平台聊天等能力，按需选择 Free、Pro（提升用量与集成功能）与 Max（更高配额与优先体验）方案。",
        "url": "https://www.anthropic.com/claude",
        "logoUrl": "https://claude.ai/favicon.ico",
        "keywords": "Claude AI 助手 Anthropic 安全 准确 隐私 价格方案 Free Pro Max 代码生成 数据可视化 文本分析 图像分析 内容创作 研究 集成 Google Workspace 项目 管理 扩展思考 高用量 终端访问 优先访问"
      },
      {
        "title": "NotebookLM | AI 研究工具与思考伙伴",
        "desc": "NotebookLM 是基于 Gemini 2.0 多模态理解能力的个性化 AI 知识助手，支持上传 PDF、网站、YouTube 视频、音频、Google 文档与幻灯片等来源，自动总结并建立主题联系，提供可溯源引用与原文引句。特色功能包括音频概览、学习辅导（解释概念、举例加深理解）、演示文稿大纲生成、创意洞察（趋势发现、产品创意、机会挖掘），并强调隐私保护：不使用个人数据进行模型训练。",
        "url": "https://notebooklm.google",
        "logoUrl": "https://notebooklm.google/_/static/branding/v4/light_mode/favicon/favicon.svg",
        "keywords": "NotebookLM AI Gemini2.0 多模态 总结 引用 溯源 隐私 个人数据 资料上传 PDF 网站 YouTube 音频 Google文档 幻灯片 学习 助学 概念解释 示例 演示大纲 创意 头脑风暴 趋势 分析 产品创意 机会挖掘 音频概览 知识管理",
        highlight: true,
        recommended: false
      },
      {
        title: 'Qwen',
        desc: 'Qwen Chat 提供全面的功能，包括聊天机器人、图像和视频理解、图像生成、文档处理、网页搜索集成、工具使用以及工件处理。',
        url: 'https://chat.qwen.ai',
        logoUrl: 'https://assets.alicdn.com/g/qwenweb/qwen-webui-fe/0.0.168/static/favicon.png',
        keywords: 'Qwen 通义千问 阿里',
        highlight: true,
        recommended: false
      },
      {
        title: '通义',
        desc: '通义是一个通情、达义的国产AI模型，可以帮你解答问题、文档阅读、联网搜索并写作总结，最多支持1000万字的文档速读。通义_你的全能AI助手',
        url: 'https://www.tongyi.com',
        logoUrl: 'https://img.alicdn.com/imgextra/i4/O1CN01EfJVFQ1uZPd7W4W6i_!!6000000006051-2-tps-112-112.png',
        keywords: '通义千问 AI PPT AI搜索 AI写作',
        highlight: true,
        recommended: false
      },
      {
        "title": "知乎直答",
        "desc": "知乎直答平台提供问题搜索、知识库管理、收藏与历史记录查看、个性化推荐等功能，支持快速输入提问及引用答主内容，并展示可订阅的专题知识库（如“地铁与轻轨”“TED中英双语演讲稿”），便于高效获取与整理结构化知识。",
        "url": "https://zhida.zhihu.com/",
        "logoUrl": "https://pica.zhimg.com/v2-793ea13f76a2bd45599c1849cad804b5.png",
        "keywords": "知乎 直答 知识库 搜索 收藏 历史 问答 订阅 内容推荐"
      },
      {
        "title": "Kimi - 更强大的 AI 助手",
        "desc": "Kimi 是月之暗面推出的智能 AI 助手，依托全新 K2 模型（模型即 Agent），支持深度研究、PPT 制作、内容生成、趋势分析与编程示例等多场景应用，并开放招募与案例展示。",
        "url": "https://www.kimi.com",
        "logoUrl": "https://statics.moonshot.cn/kimi-web-seo/favicon.ico",
        "keywords": "Kimi AI 助手 K2 模型 Agent 开源 深度研究 PPT 生成 外贸 人才 趋势 招聘 案例 游戏 开发 打砖块 内容生成 月之暗面"
      },
      {
        "title": "天工AI",
        "desc": "天工Skywork是一款具备超强DeepResearch能力的全新AI Office智能体，通过3个专家agent和1个通用agent，让AI深度研究，一键生成AI文档、AI PPT、AI表格，高效应对各类办公、学习场景；也支持网页html、图像、视频、有声书、绘本等多种形式的创意内容创作，激发无限灵感。天工Skywork融合先进的多模态理解与深度检索分析技术，一问即得科研级、专业级、咨询级的高质量结果，帮助你摆脱繁琐事务，显著提升效率。无论你是职场白领、科研人员、大学生、研究生，还是自媒体KOL，天工Skywork都将是你值得信赖的智能伙伴，助你专注思考、释放创造力。",
        "url": "https://www.tiangong.cn",
        "logoUrl": "../assert/ico/天工AI.ico",
        "keywords": "天工 Skywork 智能体 Agent AI 办公 Office 微软 Microsoft WPS Word Excel PPT 文档 幻灯片 演示文稿 网页 html 研究报告 deep research AI视频 AI音乐 AI写歌 AI绘本 MCP A2A"
      }
    ],
    '媒体生成': [
      {
        title: '即梦AI - 一站式AI创作平台',
        desc: '即梦AI是一个AI创作平台，可激发艺术创意、提升绘画和视频创作体验。您可以利用AI智能，将想象变为现实。即梦AI支持文字绘图、文字生成视频和图片生成视频，并提供创作灵感。让即梦AI开启您的AI生成艺术之旅，探索创造的无限可能！',
        url: 'https://jimeng.jianying.com',
        logoUrl: "data:image/png;base64,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",
        keywords: '即梦AI 即梦 即梦官方 即梦官网 文生图 AI作画 AI绘画 AI创作图片 AIGC 一语成画 AI艺术和创意辅助平台 文生视频 AI生成 图生视频 智能创作 图文生视频'
      }
    ],
    'API平台': [
      {
        "title": '硅基流动',
        "desc": 'SiliconCloud 硅基流动云服务，高效、模型丰富、性价比高的大模型服务平台。',
        "url": 'https://cloud.siliconflow.cn',
        "logoUrl": 'https://cloud.siliconflow.cn/favicon.ico',
        "keywords": 'siliconflow 大模型 ai 工具'
      },
      {
        "title": 'OpenAI API',
        "desc": 'OpenAI 提供的 API 接口，用于访问 GPT 模型等 AI 服务。',
        "url": 'https://openai.com/api/',
        "logoUrl": 'https://cdn.oaistatic.com/assets/favicon-l4nq08hd.svg',
        "keywords": 'openai api 人工智能 模型 服务'
      },
      {
        "title": 'GPT-GOD',
        "desc": '一个综合API平台，提供了丰富的AI模型和工具，帮助开发者快速构建AI应用。每日签到奖励积分',
        "url": 'https://gptgod.online/#/register?invite_code=5s7iq10ro9h3ex9augmeq3tnw',
        "logoUrl": 'https://gptgod.online/favicon.ico',
        "keywords": 'gpt-god api 人工智能 模型 服务'
      },
      {
        "title": '火山方舟',
        "desc": '火山方舟是火山引擎推出的一站式AI研发平台，提供了丰富的AI模型和工具，帮助开发者快速构建AI应用。',
        "url": 'https://console.volcengine.com',
        "logoUrl": 'https://res.volccdn.com/obj/volc-console-fe/images/favicon.52bcaa41.png',
        "keywords": '火山方舟 火山引擎 AI 模型 工具'
      },
      {
        "title": "Wisdom Gate",
        "desc": "注册即送 $10 额度，可以多注册几个。可使用模型：</br>wisdom-ai-gpt5 (via Gpt5)</br>wisdom-ai-gpt5-mini (via Gpt5 Mini)</br>wisdom-ai-gpt5-nano (via Gpt5 Nano)</br>wisdom-ai-dsv3 (via DeepseekV3)</br>wisdom-ai-dsr1 (via DeepseekR1)</br>wisdom-ai-oss (via GptOSS-120b)</br>wisdom-ai-claude-sonnet-4 (via Claude Sonnet 4)</br>wisdom-ai-gemini-2.5-flash (via Gemini 2.5 Flash)",
        "url": "https://wisdom-gate.juheapi.com?i=AMRy",
        "logoUrl": "https://wisdom-gate.juheapi.com/logo/logo.png",
        "keywords": "OpenAPI GPT5 Deepseek Claude Gemini"
      },
      {
        "title": "cerebras",
        "desc": "每日免费 100w token。可以用模型列表：</br>gpt-oss-120b</br>llama-3.3-70b</br>llama-4-maverick-17b-128e-instruct</br>llama-4-scout-17b-16e-instruct</br>llama3.1-8b</br>qwen-3-235b-a22b-instruct-2507</br>qwen-3-235b-a22b-thinking-2507</br>qwen-3-32b</br>qwen-3-coder-480b</br>gpt-oss-120b</br>llama-3.3-70b</br>llama-4-maverick-17b-128e-instruct</br>llama-4-scout-17b-16e-instruct</br>llama3.1-8b</br>qwen-3-235b-a22b-instruct-2507</br>qwen-3-235b-a22b-thinking-2507</br>qwen-3-32b</br>qwen-3-coder-480b",
        "url": "https://cloud.cerebras.ai?referral_code=pxrkk2cx",
        "logoUrl": "https://cloud.cerebras.ai/images/logo/cb-fav-32.png",
        "keywords": "免费 API 模型 服务"
      },
      {
        "title": "AnyRouter",
        "desc": "每日签到赠送 $25 额度。提供Claude API服务的在线平台，支持充值、邀请奖励等功能的AI服务路由器",
        "url": "https://anyrouter.top/register?aff=FHvl",
        "logoUrl": "../assert/ico/AnyRouter.png",
        "keywords": "AnyRouter API Claude"
      },
      {
        "title": "包子铺",
        "desc": "免费AI模型服务平台，为无额度用户提供公益性AI服务，支持多渠道模型切换，纯公益运营永不收费",
        "url": "https://api.5202030.xyz",
        "logoUrl": "https://api.5202030.xyz/favicon.ico",
        "keywords": "AI模型 免费服务 公益平台 人工智能 模型切换 用爱发电 永不收费"
      }
    ]
  },
  '代理机场': {
    '机场推荐': [
      {
        "title": "良心云 | 节点质量不错",
        "desc": "良心云，稳定高速，支持月付、季付、年付、不限时定量，多种套餐可选，适合不同需求用户。",
        "url": "https://xn--9kqz23b19z.com/#/register?code=39Na8zPy",
        "logoUrl": "https://xn--9kqz23b19z.com/images/logo.png",
        "keywords": "良心云 机场 代理 节点 魔法",
        "highlight": true,
        "recommended": true
      },
      {
        "title": '一分机场',
        "desc": '优点：价格低、流量多，有不限时流量。缺点：部分节点不稳定。',
        "url": 'https://xn--4gqx1hgtfdmt.com/#/register?code=IxqdhHOg',
        "logoUrl": 'https://xn--4gqx1hgtfdmt.com/favicon.ico',
        "keywords": '机场 代理 节点 魔法'
      },
      {
        "title": '性价比机场',
        "desc": '优点：价格低、节点稳定。缺点：流量少，每月流量重置。',
        "url": 'https://xn--6nq44r2uh9rhj7f.net/#/register?code=vPoik0NF',
        "logoUrl": '../assert/ico/性价比机场.ico',
        "keywords": '机场 代理 节点 魔法'
      }
    ],
    '客户端': [
      {
        "title": 'Clash Verge',
        "desc": 'Clash Verge 是一个基于 Clash 内核的 GUI 客户端，提供了丰富的功能和优化的性能。',
        "url": 'https://github.com/clash-verge-rev/clash-verge-rev.git',
        "logoUrl": '../assert/ico/clash-verge-rev.png',
        "keywords": 'clash verge 代理 节点 魔法'
      },
      {
        "title": "mihomo-party | MAC 用户",
        "desc": "Another Mihomo GUI - 基于 Electron 的 Mihomo 图形用户界面",
        "url": "https://github.com/mihomo-party-org/mihomo-party",
        "logoUrl": "https://github.githubassets.com/favicons/favicon-dark.png",
        "keywords": "mihomo electron gui proxy clash vpn network tool"
      },
      {
        "title": 'V2rayN',
        "desc": '小白勿入 | V2rayN 是一个 Windows 平台上的 V2Ray 客户端，提供了图形用户界面，方便用户配置和管理 V2Ray 代理服务。',
        "url": 'https://github.com/2dust/v2rayN/releases',
        "logoUrl": '../assert/ico/v2rayN.png',
        "keywords": 'V2rayN 代理 节点 魔法'
      }
    ]
  },
  '网盘资源': {
    '资源搜索': [
      {
      "title": "伏羲盘 - 夸克、百度、阿里网盘",
      "desc": "伏羲盘是一个汇总国内多种网盘（夸克、阿里云盘、百度网盘等）第三方资源搜索引擎的网站导航页，集中展示各搜索站的特点与优劣，包括资源丰富度、新旧程度、失效率、是否需注册或扫码、是否有广告/VIP限制、搜索速度与体验等，方便用户快速挑选合适的网盘资源搜索入口。",
      "url": "https://fuxipan.com",
      "logoUrl": "https://fuxipan.com/favicon.ico",
      "keywords": "伏羲盘 网盘 搜索引擎 夸克网盘 阿里云盘 百度网盘 资源 聚合 导航 失效链接 注册限制 VIP 广告"
      }
    ]
  },
  '图片资源': {
    '素材资源': [
      {
        "title": "Pinterest",
        "desc": "Pinterest是一个视觉发现平台，用户可以通过图片和视频来发现创意、保存想法并规划项目。提供丰富的视觉内容搜索和收藏功能。",
        "url": "https://www.pinterest.com",
        "logoUrl": "https://s.pinimg.com/webapp/favicon_48x48-7470a30d.png",
        "keywords": "图片分享 创意发现 视觉搜索 收藏 灵感 设计 DIY 美食 时尚 家居装饰"
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
      },
      {
        "title": "SeedHub | 影视&动漫分享",
        "desc": "一个提供最新电影、剧集、动漫资源的网站，包含豆瓣评分、上映时间等信息。",
        "url": "https://www.seedhub.cc",
        "logoUrl": "https://www.seedhub.cc/favicon.ico",
        "keywords": "电影 电视剧 动漫 美剧 韩剧 日剧 最新电影 高清电影 在线观看 BT下载 种子 磁力"
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
  },
  '在线社区': {
    'Discourse': [
      {
        title: 'OneHack | 1Hackers',
        desc: 'OneHack（又称 1Hackers）是一款基于 Discourse 的在线社区，专注于提供稀有教程、优质指南、独家泄漏资源及各种赠品与免费资源。用户可以通过注册登录参与讨论、资源下载与经验分享，领取免费视频下载工具、软件许可证等福利。平台涵盖赚钱方法、人工智能工具、编程技术、数据恢复和视频下载等主题，满足多元化需求。</br></br>OneHack提供包括"赚钱方法"、"AI工具"、"编程"、"数据恢复"、"视频下载"等分类，用户可在最新主题和教程中快速定位所需内容 。社区管理员定期发布限时赠品与免费软件许可证，覆盖从屏幕录像到视频编辑在内的多种工具，每条资源帖均附带下载链接或使用指南，支持快捷获取各种工具与脚本。用户可以通过回复互动或私信作者获取更多使用技巧，形成闭环式的知识分享体系。',
        url: 'https://onehack.us',
        logoUrl: '../assert/ico/OneHack.ico',
        keywords: 'OneHack 1Hackers 在线社区 Discourse 稀有教程 优质指南 独家资源 免费资源 赠品 软件许可证 赚钱方法 人工智能工具 AI工具 编程技术 数据恢复 视频下载 屏幕录像 视频编辑 免费软件 技术分享 资源下载 教程指南 黑客社区 技术论坛'
      }
    ],
    'Reddit': [
      {
        "title": "Reddit 榜单 - 热门 Subreddit 聚合",
        "desc": "Reddit 榜单（topsub.cc）聚合多个主题社区（SaaS、营销、增长黑客、SEO、副业、独立开发、游戏开发、技术等）的最新热门帖子，展示各子版块的更新时间、热度（赞数/评论数）与帖标题，帮助快速浏览当前趋势；支持新域名与自定义 Subreddit 功能。",
        "url": "https://topsub.cc/",
        "logoUrl": "https://topsub.cc/favicon.ico",
        "keywords": "Reddit 榜单 热门 Subreddit 聚合 SaaS 营销 增长黑客 GrowthHacking SEO 副业 sideproject 独立开发 indiehackers 游戏开发 IndieDev 技术 technology 趋势 热帖 汇总 实时 更新"
      }
    ]
  }
};