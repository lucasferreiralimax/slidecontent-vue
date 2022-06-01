import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueI18n from "@intlify/vite-plugin-vue-i18n"

const pathSrc = path.resolve(__dirname, "./src");

export default {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'vitest.setup.js',
    ],
  },
  plugins: [
    vue(),
    vueI18n({})
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${pathSrc}/mixins/_responsive";`,
      }
    }
  },
}
