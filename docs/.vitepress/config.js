module.exports = {
  base: '/frontend-knowledge/',
  title: '工程师日常记录学习',
  description: 'Just record.',
  themeConfig: {
    navbar: true,
    // 顶部导航栏内容
    nav: [{ text: '指南', link: '/guide/' }],
    // 侧边栏导航内容
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            { text: '介绍', link: '/guide/' },
            { text: '快速上手', link: '/guide/getting-started' },
          ],
        },
      ],
    },
  }
}
