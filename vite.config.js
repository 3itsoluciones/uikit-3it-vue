// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

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
      plugins: [
        {
          name: 'copy',
          writeBundle() {
            const src = resolve(__dirname, 'package.json')
            const dest = resolve(__dirname, 'dist', 'package.json')
            fs.copyFile(src, dest, (err) => {
              if (err) {
                console.error('Error al copiar archivos:', err)
              } else {
                console.log('Archivos estáticos copiado a dist')
              }
            })
          }
        }
      ]
    },
    minify: true,
    outDir: 'dist/dist',
  },
})