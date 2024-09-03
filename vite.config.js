// vite.config.js
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '',
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
        additionalData: '@import "@/assets/scss/main.scss";'
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'uikit-3it-vue',
      fileName: 'uikit-3it-vue',
      formats: ['es', 'cjs', 'umd'],
    },
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'vue',
        'shiki', 
        'vue-router',
        'dayjs',
        'dayjs/plugin/relativeTime',
        'dayjs/locale/es'
      ],
      output: {
        globals: {
          vue: 'Vue',
          shiki: 'Shiki',
          'vue-router': 'VueRouter',
          dayjs: 'dayjs',
          'dayjs/plugin/relativeTime': 'dayjs_plugin_relativeTime',
        },
        assetFileNames: ({ name }) => {
          if (name === 'style.css') {
            return 'css/uikit-3it-vue.css'
          }
          return name
        },
      },
    },
    minify: true,
    outDir: 'dist',
  },
  assetsInclude: ['src/types']
})