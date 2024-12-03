import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import theme from './theme.js';

export default defineUserConfig({
  base: '/dcblog/',
  lang: 'zh-CN',
  title: 'dcBlog',
  description: '记录前端学习和课题论文的笔记',

  bundler: viteBundler(),
  theme,

  // 和 PWA 一起启用
  shouldPrefetch: false,
  shouldPreload: false,
});
