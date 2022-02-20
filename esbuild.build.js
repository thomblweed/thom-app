import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

build({
  entryPoints: ['src/index.tsx'],
  outdir: 'public/',
  bundle: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"production"' },
  plugins: [sassPlugin()],
  loader: {
    '.woff': 'dataurl'
  }
}).catch((error) => {
  console.log(`build error ::>>`, error);
  process.exit(1);
});
