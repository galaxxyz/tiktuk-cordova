const { ProvidePlugin } = require('webpack');
const CracoEsbuildPlugin = require('craco-esbuild');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    plugins: [
      new ProvidePlugin({
        React: 'react',
      }),
      new BundleAnalyzerPlugin({ analyzerMode: 'server' }),
    ],
  },
  plugins: [
    {
      plugin: CracoEsbuildPlugin,
      options: {
        includePaths: ['/external/dir/with/components'],
        esbuildLoaderOptions: {
          loader: 'tsx',
          target: 'es2015',
        },
        esbuildMinimizerOptions: {
          target: 'es2015',
          css: true,
        },
        skipEsbuildJest: false,
        esbuildJestOptions: {
          loaders: {
            '.ts': 'ts',
            '.tsx': 'tsx',
          },
        },
      },
    },
  ],
};
