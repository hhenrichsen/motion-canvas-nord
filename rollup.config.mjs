import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

/** @type {import('rollup').RollupOptions} */
const config = [{
  input: 'src/index.ts',
  output: {
    file: 'lib/bundle.js',
    format: 'umd',
    name: 'MotionCanvasNord',
  },
  plugins: [typescript(), terser()]
}, {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'es',
  },
  plugins: [typescript(), terser()]
},
{
  input: 'src/index.ts',
  output: {
    file: 'lib/index.d.ts',
    format: 'es',
  },
  plugins: [dts()]
}];

export default config;
