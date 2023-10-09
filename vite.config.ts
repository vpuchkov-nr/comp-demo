import { resolve } from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc'
import createExternal from 'vite-plugin-external';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-lib',
      fileName: 'my-lib',
    },
  },
  plugins: [
    react(),
    dts(),
    createExternal({
      externals: {
        react: 'react',
        'react-dom': 'react-dom',
      }
    })
  ],
});