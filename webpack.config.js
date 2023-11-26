const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "npmPackages.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
};
