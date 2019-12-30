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
              '/components/basic/color',
              '/components/basic/text',
              '/components/basic/icon',
              '/components/basic/button',
            ]
          },
          {
            title: '表单',
            collapsable: false,
            children: [
              '/components/form/radio2',
              '/components/form/checkbox',
              '/components/form/input',
              '/components/form/select',
              '/components/form/switch',
              '/components/form/cascader',
              '/components/form/rate',
              '/components/form/slide',
              '/components/form/TimePicker',
              '/components/form/DatePicker',
              '/components/form/uploader',
              '/components/form/form',
            ]
          },
          {
            title: '数据',
            collapsable: false,
            children: [
              '/components/data/table',
              '/components/data/tag',
              '/components/data/badge',
              '/components/data/progress',
              '/components/data/tree',
              '/components/data/avatar',
              '/components/data/pagination'
            ]
          },
          {
            title: '导航',
            collapsable: false,
            children: [
              '/components/nav/NavMenu',
              '/components/nav/BreadCrumd',
              '/components/nav/Dropdown',
              '/components/nav/PageHeader',
              '/components/nav/tabs',
              '/components/nav/steps'
            ]
          },
          {
            title: '提示',
            collapsable: false,
            children: [
              '/components/notice/alert',
              '/components/notice/confirm',
              '/components/notice/dialog',
              '/components/notice/loading',
              '/components/notice/message',
              '/components/notice/MessageBox',
              '/components/notice/notification',
              '/components/notice/popover',
              '/components/notice/ToolTip',
            ]
          },

        ]
      },
    ]
  }
}
