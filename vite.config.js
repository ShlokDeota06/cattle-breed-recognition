import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace `your-username` with your actual GitHub username
export default defineConfig({
  plugins: [react()],
  base: '/pashu/' 
})
