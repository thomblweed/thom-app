import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

build({
  entryPoints: ['src/index.tsx'],
  outfile: 'dist/index.js',
  bundle: true,
  minify: true,
  plugins: [sassPlugin()]
}).catch((error) => {
  console.log(`build error ::>>`, error);
  process.exit(1);
});
