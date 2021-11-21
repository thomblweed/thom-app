import { build } from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import { start, refresh } from 'thom-dev-server';

const devBuild = async (buildOptions) => {
  try {
    await build(buildOptions);
  } catch (error) {
    console.error(`dev build error ::>>`, error);
    process.exit(1);
  }
};

const buildOptions = {
  entryPoints: ['src/index.tsx'],
  outdir: 'www/',
  bundle: true,
  minify: true,
  define: { 'process.env.NODE_ENV': '"development"' },
  sourcemap: true,
  plugins: [sassPlugin()],
  watch: {
    onRebuild(error, result) {
      if (error) {
        console.error(`rebuild error ::>>`, error);
        return;
      }
      console.info(`watch rebuild result ::`, result);
      refresh();
    }
  },
  loader: {
    '.woff2': 'dataurl'
  }
};

const serverOptions = {
  port: 2000,
  root: 'www',
  rootFilename: 'index.html'
};

devBuild(buildOptions);
start(serverOptions);
