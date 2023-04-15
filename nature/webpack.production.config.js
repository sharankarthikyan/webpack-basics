const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/nature.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "http://localhost:3001/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 2000, // 2 KB
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 244 * 1024, // 244 kilobytes
          },
        },
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
      filename: "nature.html",
      title: "Nature",
      template: "src/page-template.hbs",
      description: "Nature Description",
      minify: false,
    }), // This will create a new nature.html with newly updated js and css file [contenthash].
    new ModuleFederationPlugin({
      name: "NatureApp",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:3000/remoteEntry.js",
      },
    }),
  ],
};
