const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const webpack = require("webpack");

module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        url: require.resolve('url'),
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        buffer: require.resolve('buffer'),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
    };
    config.plugins.push(
		new NodePolyfillPlugin({
            excludeAliases: ['console'],
          })
      );
      
    config.plugins.push(new webpack.ProvidePlugin({
        process: 'process/browser',
      }));
    // config.plugins.push(  new webpack.DefinePlugin({
    //     'process.env': JSON.stringify(process.env)
    //   }));
    config.ignoreWarnings = [
        {
            file: /node_modules\/.*\.scss$/
        }
    ];

    return config;
}