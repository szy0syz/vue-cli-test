module.exports={
  entry: './main.js',

  output: {
    path: __dirname,
    filename: 'build.js'
  }

  module: {
    loaders:[
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/}
    ]
  },

  babel: {
    preset: ['es2015'],
    plugins: ['transform-runtime']
  }

};
