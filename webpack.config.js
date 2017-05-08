const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: [
      "eventsource-polyfill",
      "webpack-hot-middleware/client",
      "babel-polyfill",
      "./demo",
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
           {
              test: /\.jsx?$/,
              use: ['babel-loader', 'strict-loader']
            },
           {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
