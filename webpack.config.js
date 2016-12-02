var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
  entry: './main.js',

  output: {
    path: __dirname,
    filename: 'build.js'
  },

  module: {
    loaders:[
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), exclude: /node_modules/ }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },

  plugins: [
        new ExtractTextPlugin("styles.css")
    ]
};
