var path = require('path');
module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: "inline-source-map",
  entry: {
    app: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader'
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
    ]
  },
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src"),
      "templates": path.resolve(__dirname, "src", "templates"),
      "constants": path.resolve(__dirname, "src", "constants"),
      "models": path.resolve(__dirname, "src", "models"),
      "utils": path.resolve(__dirname, "src", "utils"),
      "examples": path.resolve(__dirname, "src", "examples"),
      "thor": path.resolve(__dirname, "src", "thor"),
      "h": path.resolve(__dirname, "src", "h")
    }
  },
  devServer: {
    hot: true,
    port: 4444,
    contentBase: path.resolve(__dirname, "src")
  }
};
