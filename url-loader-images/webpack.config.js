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
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options:{
            limit: 100000,

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



