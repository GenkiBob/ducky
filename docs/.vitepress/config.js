export default {
  title: 'DigiLink',
  description: 'Digilink 是全球IP服务商,全球范围内拥有超过800万个IP,提供企业级海外 HTTP/HTTPS/SOCKS5 代理服务、速度快、稳定高效',
  titleTemplate: '数字网络连接',
  // base: '/ducky/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  // head: [
  //   ['link', { rel: 'icon', href: '/icon.png' }],
  // ],
  themeConfig: {
    siteTitle: 'DigiLink · 数连',
    nav: [
      {
        text: '软件下载',
        items: [
          { text: 'Mac 苹果电脑', link: '/mac' },
          { text: 'Windows 电脑', link: '/windows' },
          { text: 'IOS 苹果手机（平板）', link: '/ios' },
          { text: '安卓|鸿蒙 手机（平板）', link: '/android' },
          { text: '第三方通用软件', link: 'https://wiki.tyro.wiki' },
        ]
      },
      {
        text: 'Todesk 远程',
        items: [
          { text: 'Todesk 官网下载', link: 'https://www.todesk.com/download.html' },
          { text: 'Windows 免安装版', link: 'https://dl.todesk.com/windows/ToDesk_Lite.exe' },
        ]
      },
      { text: '账号杂货铺', link: 'http://cloud.idid88.com/' },
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
  }
}
