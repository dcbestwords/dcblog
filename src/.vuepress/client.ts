import { defineClientConfig } from 'vuepress/client';
import { setupTransparentNavbar } from 'vuepress-theme-hope/presets/transparentNavbar.js';
import 'vuepress-theme-hope/presets/round-blogger-avatar.scss';
import 'vuepress-theme-hope/presets/bounce-icon.scss';

export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: 'homepage' });
  },
});
