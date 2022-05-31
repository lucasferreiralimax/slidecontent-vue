import path from 'path'
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, 'src/locales/**')
    })
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, "src/mixins/_responsive")
        ]
      }
    }
  },
})