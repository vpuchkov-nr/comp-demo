import { resolve } from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react-swc'
import postcss from 'rollup-plugin-postcss';
import typescript from "@rollup/plugin-typescript";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-lib',
      fileName: 'my-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [
        // postcss({
        //   extract: false,
        //   use: ['sass'],
        // })
        // typescriptPaths({
        //   preserveExtensions: true,
        // }),
        // typescript({
        //   sourceMap: false,
        //   declaration: true,
        //   outDir: "dist",
        // }),
      ],
    },
  },
  plugins: [
    react(),
    dts(),
  ],
});