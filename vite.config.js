const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    port: 8080,
  },
};
