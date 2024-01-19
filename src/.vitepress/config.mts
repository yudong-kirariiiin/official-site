import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/official-site/',
  lang: 'ja',
  head: [
    ['link', { rel: 'icon', href: '/official-site/favicon.ico' }],
    [
      'meta',
      { property: 'og:title', content: 'ユドン🐸 - 配信者' },
    ],
    [
      'meta',
      { property: 'og:description', content: 'ツイキャス・YouTubeで活動しているユドンです！雑談配信と歌い手とゲーム実況もしています！' },
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://yudong-kirariiiin.github.io/official-site/ogp.png' },
    ],
    [
      'meta',
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    [
      'meta',
      { name: 'twitter:creator', content: '@yudong_kirarin' },
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-D6ETTZMXLQ' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag("config", "G-D6ETTZMXLQ");`
    ]
  ],
  title: "ユドン🐸 - 配信者",
  description: "ツイキャス・YouTubeで活動しているユドンです！雑談配信と歌い手とゲーム実況もしています！",
  themeConfig: {
    outline: {
      label: '目次',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'YouTube', link: 'https://www.youtube.com/channel/UCldHuQwt88gnY-qvnkP-_xA' },
      { text: 'ツイキャス', link: 'https://twitcasting.tv/yudong_kirarin' },
      { text: 'X(旧Twitter)', link: 'https://twitter.com/yudong_kirarin' },
      { text: 'グッズショップ', link: 'https://yudong-kirarin.booth.pm/' },
      { 
        text: 'Other', 
        items: [
          { text: '初見さんへ', link: '/start' },
          { text: 'プロフィール', link: '/profile' },
          { text: '活動年表', link: '/history' },
          { text: 'リンク集', link: '/links' },
          { text: 'プライバシーポリシー', link: '/privacy' }
        ] 
      },
    ],
    sidebar: [
      {
        text: 'メニュー',
        items: [
          { text: '初見さんへ', link: '/start' },
          { text: 'プロフィール', link: '/profile' },
          { text: '活動年表', link: '/history' },
          { text: 'リンク集', link: '/links' },
          { text: 'プライバシーポリシー', link: '/privacy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/yudong_kirarin' },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      copyright: 'Copyright(c) 2022 yudong_kirariiiin. All Rights Reserved.'
    }
  },
  sitemap: {
    hostname: 'https://yudong-kirariiiin.github.io/official-site/'
  }
})