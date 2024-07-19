import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  },  // Added comma here
  plugins: [react()],
  server: {
    port: 3000,
    proxy:{
      '/api' :{
        target: "http://localhost:5000",
      } 
      
    }
  }
})

