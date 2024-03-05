const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = /** @type {import('@rspack/core').Configuration} */ ({
  mode: "none",
  entry: "./src/index.js",
  module: {
    // reproducing: `a-module.js` shouldn't be processed by builtin:swc-loader
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    {
      apply(compiler) {
        new compiler.webpack.SwcJsMinimizerRspackPlugin({
          // reproducing: must enable mangle
          // mangle: false,
        }).apply(compiler);
      },
    },
  ],
});
