const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name].[hash][ext]",
    clean: true,
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/exchange_rate_calculator.html",
      chunks: ["index"],
      filename: "exchange_rate_calculator.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/form_validator.html",
      chunks: ["index"],
      filename: "form_validator.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/expenses_tracker.html",
      chunks: ["index"],
      filename: "expenses_tracker.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/now_proyect.html",
      chunks: ["index"],
      filename: "now_proyect.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/personal_speaker.html",
      chunks: ["index"],
      filename: "personal_speaker.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/relaxer_app.html",
      chunks: ["index"],
      filename: "relaxer_app.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/app/speed_typer.html",
      chunks: ["index"],
      filename: "speed_typer.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // 2. Extract CSS into files
          "css-loader", // 1. Turn CSS into common.js
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
});
