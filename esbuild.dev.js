import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import serve from 'create-serve';

const dev = async (buildOptions, serverOptions) => {
  try {
    await build(buildOptions);
    serve.start(serverOptions);
  } catch (error) {
    console.error(`dev build error ::>>`, error);
    process.exit(1);
  }
};

const buildOptions = {
  entryPoints: ['src/index.tsx'],
  outdir: 'www/dist',
  bundle: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"development"' },
  sourcemap: true,
  plugins: [sassPlugin()],
  watch: {
    onRebuild(error, result) {
      if (error) {
        console.info(`rebuild error ::>>`, error);
        return;
      }
      console.info(`watch rebuild result ::`, result);
      serve.update();
    }
  }
};

const serverOptions = {
  port: 8000,
  root: 'www',
  live: true
};

dev(buildOptions, serverOptions);
