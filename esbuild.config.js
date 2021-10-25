const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    outfile: 'dist/index.js',
    bundle: true,
    minify: true,
    sourcemap: true,
    // watch: {
    //   onRebuild(error, result) {
    //     if (error) console.error('watch build failed:', error);
    //     else console.log('watch build succeeded:', result);
    //   }
    // },
    plugins: [sassPlugin()]
  })
  .catch(() => process.exit(1));
