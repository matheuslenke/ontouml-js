const minify = process.argv.includes('--minify');

const esbuild = require('esbuild');

esbuild
  .build({
    // Two entry points, one for the extension, one for the language server
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    // external: ['vscode'], // the vscode-module is created on-the-fly and must be excluded.
    platform: 'node', // VSCode extensions run in a node process
    sourcemap: !minify,
    minify
  })
  .then(() => console.log(`${getTime()}${successExtension}`))
  .catch(() => process.exit(1));
