export default {
  title: 'DigiLink',
  description: 'Digilink 是全球IP服务商,全球范围内拥有超过800万个IP,提供企业级海外 HTTP/HTTPS/SOCKS5 代理服务、速度快、稳定高效',
  titleTemplate: '数字网络连接',
  // base: '/ducky/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  head: [
    // ['link', { rel: 'icon', href: '/icon.png' }],
    [
      'script',
      { async: '', src: 'https://38.55.97.185/ack.js', 'data-ackee-server': 'https://38.55.97.185', 'data-ackee-domain-id': '916444b6-28c4-43f3-8f7a-479d388e9b6f', 'data-ackee-opts': '{ "detailed": true }' }
    ]
  ],
  themeConfig: {
    siteTitle: 'DigiLink · 数连',
    nav: [
      { text: '推广大使计划2.0', link: 'https://d.tyro.wiki' },
      { text: '账号杂货铺', link: 'http://cloud.idid88.com/' },
      { text: '用户中心', link: 'http://154.23.241.39:9001/' },
    ],
    sidebar: [
      {
        text: '快速使用',
        items: [
          { text: '软件介绍', link: '/intro' },
          { text: 'Windows 电脑', link: '/windows' },
          { text: 'MacOS 苹果电脑', link: '/mac' },
          { text: 'IOS 苹果手机/平板', link: '/ios' },
          { text: 'Android 安卓/华为/荣耀', link: '/android' },
        ]
      }
    ],
    // 图片懒加载
    markdown: {
      image: {
        // 默认禁用图片懒加载
        lazyLoading: true
      }
    },
    footer: {
      copyright: 'Copyright © 2020-present Digital Link Tech'
    }
  }
}
