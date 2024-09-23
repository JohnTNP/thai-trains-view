import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api/checktrain': {
        target: 'https://ttsview.railway.co.th/checktrain_2023.php',
        changeOrigin: true,
      }
    }
  }
})
