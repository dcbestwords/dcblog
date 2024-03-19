import { defineUserConfig } from 'vuepress';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'dcBlog',
  description: '记录前端学习和课题论文的笔记',
  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
});
