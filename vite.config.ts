import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './dist-web',
  },
  server: {
    port: 5001,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@web': '/src/web',
    },
  },
});
