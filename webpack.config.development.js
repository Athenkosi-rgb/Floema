const { merge } = require("webpack-merge");
const path = require("path");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, ""), // Change this to your desired output directory
    },
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
