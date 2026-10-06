import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build'
  return {
    plugins: [react()],
    base: '/porfolio/',
    build: {
      outDir: isProduction ? 'docs' : 'dist',
    },
  }
})
