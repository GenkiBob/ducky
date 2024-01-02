export default {
    title: 'Ducky Cloud',
    description: '速鸭云',
    titleTemplate: 'DuckyCloud 是全球IP服务商,全球范围内拥有超过800万个IP,提供企业级海外 HTTP/HTTPS/SOCKS5 代理服务、速度快、稳定高效',
    // base: '/ducky/',
    lang: 'zh-CN',
    ignoreDeadLinks: true,
    // outDir: '../dist',
    themeConfig: {
        siteTitle: 'Ducky Cloud · 速鸭云',
        nav: [
          {
              text: 'Todesk 远程',
              items: [
                { text: 'Todesk 官网下载', link: 'https://www.todesk.com/download.html' },
                { text: 'Windows 免安装版', link: 'https://dl.todesk.com/windows/ToDesk_Lite.exe' },
              ]
            },
          { text: '账号杂货铺', link: 'http://cloud.idid88.com/' },
          ]
      },
      head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
      ]
  }
  