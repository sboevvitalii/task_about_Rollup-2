import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  input: './index.js',
  output: {
    file: './build/bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    styles(),
    serve('dist'),
    livereload(),
    babel({ babelHelpers: 'bundled' })
  ]
};