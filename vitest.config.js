import vue from '@vitejs/plugin-vue'
import path from 'path'
import vueI18n from "@intlify/vite-plugin-vue-i18n"

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
}
