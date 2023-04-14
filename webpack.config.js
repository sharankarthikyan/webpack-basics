const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "./dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024, // 1000 kilobytes
          },
        },
      },
    ],
  },
};
