import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cicd-hms-docker', // or '/' depending on your routing and folder structure
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8083/api/doctors',
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: 'dist'
  }
})