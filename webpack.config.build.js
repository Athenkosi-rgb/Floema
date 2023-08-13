const path = require("path");

const { merge } = require("webpack-merge");
const config = require("./webpack.config"); // Fix typo here

module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.join(__dirname, "public"),
  }
});
