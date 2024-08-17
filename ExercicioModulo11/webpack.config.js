const HtmlWebpackPlugin = require("html-webpack-plugin");
const jquery = require("jquery");
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jquery",
    }),
  ],
};
