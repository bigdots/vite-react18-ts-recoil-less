import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: { alias: { '@': '/src' } },
  plugins: [react()],
  server: {
    // host: '0.0.0.0',
    // port: 8000,
    watch: {
      usePolling: true, // 当你zaiwindows上使用docker运行时开启
    },
  },
})
