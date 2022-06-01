import path from 'path'
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

const pathSrc = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, 'src/locales/**')
    })
  ],
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${pathSrc}/mixins/_responsive";`,
      }
    }
  },
})