import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react({
      plugins: [],
      jsxImportSource: 'react',
      base: "/Portfolio",
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@styles': resolve(__dirname, 'src/styles'),
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
        }
      }
    },
    sourcemap: false,
    assetsInlineLimit: 4096,
  },
  server: {
    open: true,
    port: 3000,
    strictPort: false,
  },
  preview: {
    port: 5000,
    open: true,
  }
})
