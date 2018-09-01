let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode:'development',  
  entry: {
    home: path.resolve(__dirname,'src/js/index.js')
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: './dist/'
  },
  module: {
    rules: [
      //Aqui van los loaders   
      /*{
      test: Que tipo de archivo quiero reconocer.
      use: que loader se va a encargar del archivo
      }
      */
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader"
        ] 
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 120000,

          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 1000000,
            name: './video/[name].[hash].[ext]',
          }
        }
      },
      {
        test: /\.js$/, 
        use: {
          loader: 'babel-loader'
        }
      }      
		]
  },
  plugins:[
    new MiniCssExtractPlugin({
            filename: "css/[name].css"
    })
  ]   
}



