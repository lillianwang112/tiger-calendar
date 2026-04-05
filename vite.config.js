import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig(({command})=>({
  plugins: [react(), ...(command==='build'?[viteSingleFile()]:[])],
  publicDir: false, // Static assets (icons, manifest, sw.js) stay at root as-is
  server: {
    port: 5173,
    strictPort: true,
    hmr: { protocol:'ws', host:'localhost', port:5173 },
  },
  optimizeDeps: {
    // Firebase compat SDK is not compatible with Vite's dep optimizer — exclude it
    exclude: ['firebase/compat/app', 'firebase/compat/auth', 'firebase/compat/firestore'],
  },
  build: {
    // Output the single-file bundle to dist/ then a post-build script copies it to root index.html
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'dev.html'),
    },
  },
}));
