import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/rtc-eviction-viz',
  define: {
    'process.env': process.env
  }
})
