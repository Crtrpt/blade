const rollup = require('rollup');
import scss from 'rollup-plugin-scss'
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import typescript from 'rollup-plugin-typescript2';
import sourcemaps from 'rollup-plugin-sourcemaps';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
// import multi from '@rollup/plugin-multi-entry';
import { wasm } from '@rollup/plugin-wasm';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

import alias from 'rollup-plugin-alias';
import vue  from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';
import cleaner from 'rollup-plugin-cleaner';


const env = process.env.NODE_ENV
console.log("env:"+process.env.NODE_ENV)

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    dir:"public/js",
    format:"esm",
  },
  plugins: [
    cleaner({
      targets: [
        './public/js'
      ]
    }),
    wasm(),
    image(),
    scss(
      {
        output: 'public/css/bundle.css',
        sourceMap: true,
        sourceMapEmbed: true,
        include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        failOnError: true,
        watch: 'src/',
      }
    ),
    alias({
      resolve: [ '.js', '.ts' ],
      entries: [
        { find: 'vue', replacement: 'node_modules/vue/dist/vue.runtime.esm-browser.js' }
      ]
    }),
    typescript(),
    vue(
      { needMap: false }
    ),
    css(),
    serve({
      contentBase:"./public"
    }),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    livereload("public"),
    replace({
      preventAssignment:true,
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    dynamicImportVars({
    }),
    sourcemaps(),
   
  ]
};


