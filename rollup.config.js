import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'esm',
      file: 'dist/index.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue({
      css: true, // Dynamically inject CSS in the bundle
      compileTemplate: true // Explicitly convert template to render function
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    css({ output: 'bundle.css' }),
    terser()
  ]
};
