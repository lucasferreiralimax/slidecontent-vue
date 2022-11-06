import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'

const pathSrc = fileURLToPath(new URL('./src', import.meta.url));

export default {
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [
      'vitest.setup.js',
    ],
  },
  resolve: {
    alias: {
      '@': pathSrc
    }
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `@import "${pathSrc}/mixins/_responsive";`,
      }
    }
  },
}
