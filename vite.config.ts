import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Drpolisetty1/',   // 👈 MUST match repo name exactly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
