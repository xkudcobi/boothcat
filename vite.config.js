import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the site under /boothcat/; local dev stays at /.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/boothcat/' : '/',
  server: { port: 5173 },
})
