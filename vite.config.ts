import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

const srcPath = path.resolve(__dirname, 'src');
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(srcPath, 'components'),
      '@styles': path.resolve(srcPath, 'styles'),
      '@app': path.resolve(srcPath, 'app'),
    },
  },
});
