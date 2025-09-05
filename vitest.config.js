import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    testTimeout: 15000,
    css: false,
    silent: false,
    onConsoleLog() {
      return false;
    },
  },
  server: {
    port: 3000,
    open: true
  }
})