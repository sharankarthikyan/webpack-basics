const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": "./src/hello-world.js",
    "nature": "./src/nature.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },
  mode: "production",
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
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // It will give us sperate file for css. If you don't specify it, then this css will on js file
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(), // This helps to clean the dist folder, because it is specified in output.path
    new HtmlWebpackPlugin({
      filename: "hello-world.html",
      chunks: ["hello-world"],
      title: "Hello World",
      template: "src/page-template.hbs",
      description: "Hello World Description",
      minify: false,
    }), // This will create a new index.html with newly updated js and css file [contenthash].
    new HtmlWebpackPlugin({
      filename: "nature.html",
      chunks: ["nature"],
      title: "Nature",
      template: "src/page-template.hbs",
      description: "Nature Description",
      minify: false,
    }), // This will create a new index.html with newly updated js and css file [contenthash].
  ],
};
