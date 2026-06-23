import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
    publicDir: 'public',
  build: {
    assetsDir: 'assets',
    // Ensure public files are copied to dist
    copyPublicDir: true,
  }
})
