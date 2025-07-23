import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ai-native-summer-calendar/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        // ハッシュを短くして、より予測可能にする
        entryFileNames: 'assets/[name]-[hash:8].js',
        chunkFileNames: 'assets/[name]-[hash:8].js',
        assetFileNames: 'assets/[name]-[hash:8].[ext]'
      }
    }
  }
})
