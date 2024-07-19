import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-router-dom']
    }
  }
  plugins: [react()],
  server:{
    port: 3000,
    proxy:{
      '/api' :{
        target: "https://chatapp-backend-8ptr.onrender.com",
      } 
      
    }
  }
})
