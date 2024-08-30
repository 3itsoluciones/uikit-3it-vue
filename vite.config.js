// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        additionalData: '@import "@/assets/scss/main.scss";',
      }
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'vue-uikit-3it',
      fileName: 'vue-uikit-3it',
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: [
        'vue', 
        'shiki', 
        'vue-router'
      ],
      output: {
        globals: {
          vue: 'Vue',
          shiki: 'Shiki',
          'vue-router': 'VueRouter'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'vue-uikit-3it.css'
          }
          return assetInfo.name
        }
      },
    },
    minify: true,
    outDir: 'dist',
  },
})