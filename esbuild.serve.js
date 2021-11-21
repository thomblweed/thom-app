import { serve } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

serve(
  {
    servedir: 'www',
    port: 1234
  },
  {
    entryPoints: ['src/index.tsx'],
    outdir: 'www/js',
    bundle: true,
    minify: true,
    sourcemap: true,
    define: { 'process.env.NODE_ENV': '"development"' },
    plugins: [sassPlugin()]
  }
)
  .then((server) => {
    console.info('>>> dev server running on port:', server.port);
  })
  .catch((error) => {
    console.error(`dev serve error ::>>`, error);
    process.exit(1);
  });
