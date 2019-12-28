module.exports = {
  base: '/zzr-components-1/',
  title: 'ZZR 组件',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
    ]
  }
}
