const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.wasm$/,
        use: ["wasm-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    fallback: {
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
      fs: false,
    }
  },
  devServer: {
    // static: path.resolve(__dirname, "bundle"),
    static: "./bundle",
    // contentBase: path.resolve(__dirname, "bundle"),
    host: "localhost",
    port: 3000,
    open: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "bundle"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
