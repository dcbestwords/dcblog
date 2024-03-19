import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '语言基础',
    link: '/basic_language/',
    icon: 'code',
  },
  {
    //导航栏名称
    text: '源码解析',
    link: '/source_code/',
    icon: 'read',
  },
  {
    text: '服务端',
    link: '/Server/',
    icon: 'back-stage',
  },
  {
    //导航栏名称
    text: '效率协作',
    link: '/Efficiency/',
    icon: 'group',
  },
  {
    text: '浏览器通信',
    link: '/browser_internet/',
    icon: 'network',
  },
  {
    text: '算法',
    link: '/algorithm/',
    icon: 'edit',
  },
  {
    text: '页面练习',
    link: '/Project_50/',
    icon: 'page',
  },
  {
    text: '论文课题',
    link: '/paper/',
    icon: 'study',
  },
  {
    text: '文档教程',
    link: '/reference/',
    icon: 'article',
  },
]);
