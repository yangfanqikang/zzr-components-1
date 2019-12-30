module.exports = {
  base: '/zzr-components-1/',
  title: 'ZZR 组件',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://yangfanqikang.github.io/zzr-components-1'},
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '基础',
            collapsable: false,
            children: [
              '/components/color',
              '/components/text',
              '/components/icon',
              '/components/button',
            ]
          },
          {
            title: '表单',
            collapsable: false,
            children: [
              '/components/form',
            ]
          }

        ]
      },
    ]
  }
}
