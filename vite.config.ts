import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import EnvironmentPlugin from 'vite-plugin-environment'

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  optimizeDeps: {
    exclude: ['@ffmpeg/ffmpeg', '@ffmpeg/util']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
