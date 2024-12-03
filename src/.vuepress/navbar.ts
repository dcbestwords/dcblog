import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '编程学习',
    icon: 'keyboard fas',
    children: [
      {
        text: '前端基础',
        link: '/basic_language/',
        icon: 'code fas',
      },
      {
        text: '源码解析',
        link: '/source_code/',
        icon: 'file-code fas',
      },
      {
        text: '效率协作',
        link: '/Efficiency/',
        icon: 'user-group fas',
      },
      {
        text: '浏览器通信',
        link: '/browser_internet/',
        icon: 'globe fas',
      },
      {
        text: '算法',
        link: '/algorithm/',
        icon: 'network-wired fas',
      },
      {
        text: '服务端',
        link: '/Server/',
        icon: 'laptop-code fas',
      },
    ],
  },
  {
    text: '生活随笔',
    link: '/life/',
    icon: 'wine-bottle fas',
  },
  {
    text: '课题公考',
    link: '/paper/',
    icon: 'graduation-cap fas',
  },
  {
    text: '文档教程',
    link: '/reference/',
    icon: 'book fas',
  },
]);
