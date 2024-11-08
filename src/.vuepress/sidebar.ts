import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/basic_language/': [
    {
      text: 'HTML',
      icon: 'html',
      prefix: 'HTML/',
      link: 'HTML/',
      children: 'structure',
    },
    {
      text: 'CSS',
      icon: 'css',
      prefix: 'CSS/',
      link: 'CSS/',
      children: 'structure',
    },
    {
      text: 'JavaScript',
      icon: 'javascript',
      prefix: 'javaScript/',
      link: 'javaScript/',
      children: 'structure',
      collapsible: true,
    },
    {
      text: '预处理语言',
      icon: 'scss',
      prefix: 'preprocess/',
      link: 'preprocess/',
      children: 'structure',
    },
    {
      text: '框架',
      icon: 'vue',
      prefix: 'vue/',
      link: 'vue/',
      children: 'structure',
    },
    {
      text: 'Jquery',
      icon: 'jQuery',
      prefix: 'jquery/',
      link: 'jquery/',
      children: 'structure',
    },
  ],
  '/algorithm/': [
    {
      text: '数据结构',
      icon: 'structure',
      prefix: 'data_structure/',
      link: 'data_structure/',
      children: 'structure',
    },
    {
      text: '手写练习',
      icon: 'edit',
      prefix: 'method_mock/',
      link: 'method_mock/',
      children: 'structure',
    },
    {
      text: '解决方案',
      icon: 'tool',
      prefix: 'solution/',
      link: 'solution/',
      children: 'structure',
    },
  ],
  '/Server/': 'structure',
  '/Efficiency/': 'structure',
  '/source_code/': [
    {
      text: 'Lodash',
      icon: 'lodash',
      prefix: 'lodash/',
      link: 'lodash/',
      children: 'structure',
    },
    {
      text: 'promise',
      prefix: 'promise/',
      link: 'promise/',
      children: 'structure',
    },
    {
      text: 'vue2',
      icon: 'vue',
      prefix: 'vue2/',
      link: 'vue2/',
      children: 'structure',
    },
    {
      text: 'vue3',
      icon: 'vue',
      prefix: 'vue3/',
      link: 'vue3/',
      children: 'structure',
    },
    {
      text: 'vue生态',
      icon: 'vue',
      prefix: 'vue_related/',
      link: 'vue_related/',
      children: 'structure',
    },
  ],
  '/browser_internet/': [
    {
      text: '浏览器',
      icon: 'chrome',
      prefix: 'Browser/',
      link: 'Browser/',
      children: 'structure',
    },
    {
      text: '网络通信',
      icon: 'network',
      prefix: 'network/',
      link: 'network/',
      children: 'structure',
    },
  ],
  '/paper/': [
    {
      text: 'pytorch',
      icon: 'pytorch',
      prefix: 'code/',
      link: 'code/',
      children: 'structure',
    },
    {
      text: '公考笔记',
      icon: 'study',
      prefix: 'exam/',
      link: 'exam/',
      children: 'structure',
    },
  ],
  '/Project_50/': 'structure',
  '/reference/': 'structure',
});
