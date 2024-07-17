import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

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
    vue(),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve(),
    terser()
  ]
}
