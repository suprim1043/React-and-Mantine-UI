import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    server: {
    host: '0.0.0.0', // Make it accessible on local network
    port: 3000, // Default port (you can change it if needed)
  },
  plugins: [react()],
})
