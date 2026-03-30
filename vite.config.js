import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  publicDir: false, // Static assets (icons, manifest, sw.js) stay at root as-is
  build: {
    // Output the single-file bundle to dist/ then a post-build script copies it to root index.html
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'dev.html'),
    },
  },
});
