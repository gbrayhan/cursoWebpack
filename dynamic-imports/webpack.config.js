const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
  mode:'development',  
  entry: {
    // vendor: ['react','react-dom'],
    home: path.resolve(__dirname,'src/js/index.js'),
    contact: path.resolve(__dirname,'src/js/contacto.js')
  },
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    publicPath: path.resolve(__dirname,'dist')+"/",
    chunkFilename:'js/[id].[chunkhash].js',
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
          MiniCssExtractPlugin.loader, 
          {
            loader:"css-loader",
            options:{
              modules: true,
              importLoaders:1
            }
          },
          "postcss-loader"
        ] 
      },
      {
        test: /\.scss$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader","sass-loader"
        ] 
      },
      {
        test: /\.less$/, 
        use: [
          MiniCssExtractPlugin.loader, "css-loader",{
            loader: "less-loader",
            options: {
              noIeCompat: true,

            }
          }
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
        test: /\.js$/, 
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }      
		]
  },
  plugins:[
    new MiniCssExtractPlugin({
            filename: "css/[name].css"
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')

    })

  ],
  // optimization: {
  //   splitChunks: {
  //       cacheGroups:{
  //         vendor:{
  //           chunks: 'initial',
  //           name: 'vendor',
  //           test: 'vendor',
  //           enforce: true
  //         }
  //       }
  //   }
  // }   
}



