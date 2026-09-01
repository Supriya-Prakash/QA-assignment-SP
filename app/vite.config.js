import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: false,
    allowedHosts: ['app', 'localhost'],
  }
})

