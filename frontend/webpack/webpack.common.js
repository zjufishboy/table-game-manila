const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口
  entry: "./src/entry/index.tsx",
  // 输出文件
  output: {
    filename: "[contenthash:12].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/entry/index.html",
      // favicon: './public/favicon.ico',
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        exclude: /\.module\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: ["file-loader"],
      },
    ],
  },
};
