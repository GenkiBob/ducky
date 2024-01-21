export default {
  title: 'Ducky Cloud',
  description: 'DuckyCloud 是全球IP服务商,全球范围内拥有超过800万个IP,提供企业级海外 HTTP/HTTPS/SOCKS5 代理服务、速度快、稳定高效',
  titleTemplate: '速鸭云',
  // base: '/ducky/',
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  // outDir: '../dist',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
  ],
  themeConfig: {
    siteTitle: 'Ducky Cloud · 速鸭云',
    nav: [
      {
        text: '软件下载',
        items: [
          { text: 'Mac 电脑', link: '/mac' },
          { text: '苹果手机平板', link: 'https://wiki.tyro.wiki' },
          { text: 'Windows 电脑', link: 'https://assets.tyro.wiki/t/okk.exe' },
          { text: '安卓鸿蒙/手机平板', link: 'https://assets.tyro.wiki/t/okk.apk' },
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
    // sidebar: {
    //   // 当用户在 `指南` 目录页面下将会展示这个侧边栏
    //   '/down/': [
    //     {
    //       text: '快速上手',
    //       items: [
    //         // This shows `/guide/index.md` page.
    //         { text: '介绍', link: '/down/' },
    //         { text: '苹果 手机&平板', link: '/down/ios' },
    //         { text: '安卓与鸿蒙 手机&平板', link: '/down/android' },
    //         { text: 'Windows 电脑', link: '/down/windows' },
    //         { text: 'Mac 电脑', link: '/down/mac' },
    //       ]
    //     },
    //   ],
    // }
  },

}
