import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sevent notes',
  lastUpdated: true,
  themeConfig: {
    logo: './asstes/images/xing.png',
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'nodejs',
        collapsed: false,
        items: [
          {
            text: '全局对象',
            link: '/src/node/0-全局对象global',
          },
          {
            text: 'node核心',
            link: '/src/node/1-node核心',
          },
          {
            text: '内置模块',
            link: '/src/node/2-内置模块',
          },
          {
            text: 'IO',
            link: '/src/node/3-IO',
          },
          {
            text: '文件流',
            link: '/src/node/4-文件流',
          },
          {
            text: 'net模块',
            link: '/src/node/5-net模块',
          },
          {
            text: 'http模块',
            link: '/src/node/6-http模块',
          },
          {
            text: 'https模块',
            link: '/src/node/7-https模块',
          },
          {
            text: 'node生命周期',
            link: '/src/node/8-node生命周期',
          },
          {
            text: 'EventEmitter',
            link: '/src/node/9-EventEmitter',
          },
        ],
      },
    ],
  },
})
