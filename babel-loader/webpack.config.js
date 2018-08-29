let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode:'development',  
  entry: {
    home: path.resolve(__dirname,'index.js')
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //Aqui van los loaders   
      //test: Que tipo de archivo quiero reconocer.
      //use: que loader se va a encargar del archivo
      {
        test: /\.js$/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
          }
        },
      },
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ] 
      }
		]
  },
  plugins:[
    new MiniCssExtractPlugin({
            filename: "css/[name].css"
    })
  ]   
}



