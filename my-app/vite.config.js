import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Setup an alias, e.g., for easy access to 'src' folder using '@'
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Example 1: Add global SCSS variables/mixins to every component
        // This is useful for variables you want to use everywhere without an @import
        additionalData: `@import "@/assets/styles/global-vars.scss";`,
        
        // Example 2: Include node_modules paths for easier imports
        // includePaths: ['node_modules'], 
      },
    },
    // Optional: Configure CSS Modules behavior for files ending in .module.scss
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
});
