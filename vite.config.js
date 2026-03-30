import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'firebase': ['firebase/compat/app', 'firebase/compat/auth', 'firebase/compat/firestore'],
        },
      },
    },
  },
});
