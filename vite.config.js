import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/clinica-sorriso-perfeito/',
  server: {
    port: 3000,
    open: true
  }
})