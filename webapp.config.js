const path = require("path");
const CleanupPlugin = require("webpack-cleanup-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "web",
  entry: [
    path.resolve(__dirname, "./src/webapp/public/js/index.js")
  ],
  output: {
    path: path.resolve(__dirname, "./dist/webapp/public"),
    filename: "js/bundle.[chunkhash].js",
    publicPath: ""
  },
  resolve: {
    extensions: [ ".web.js", ".js", ".scss" ],
    alias: {
      "hippo/infrastructure/logging$": path.resolve(__dirname, "./src/infrastructure/logging/index.js"),
      "hippo/infrastructure/util$": path.resolve(__dirname, "./src/infrastructure/util/index.web.js"),
      "hippo/infrastructure/dependency-injection$": path.resolve(__dirname, "./src/infrastructure/dependency-injection/index.js"),
      "hippo/infrastructure/cryptography$": path.resolve(__dirname, "./src/infrastructure/cryptography/index.web.js")
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        "babel-loader",
        "eslint-loader"
      ]
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        "style-loader",
        {
          loader: MiniCssExtractPlugin.loader
        },
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  plugins: [
    new CleanupPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.[chunkhash].css"
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/webapp/public/index.html"),
      filename: path.resolve(__dirname, "./dist/webapp/public/index.html")
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "./dist/webapp/public"),
    compress: true,
    port: 9789
  }
};