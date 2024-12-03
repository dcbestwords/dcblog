import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '前端基础',
    link: '/basic_language/',
    icon: 'code fas',
  },
  {
    //导航栏名称
    text: '源码解析',
    link: '/source_code/',
    icon: 'file-code fas',
  },
  {
    text: '服务端',
    link: '/Server/',
    icon: 'laptop-code fas',
  },
  {
    //导航栏名称
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
  // {
  //   text: '页面练习',
  //   link: '/Project_50/',
  //   icon: 'page',
  // },
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
