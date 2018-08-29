let path = require('path');


module.exports = {
  mode:'development',  
  entry: path.resolve(__dirname,'index.js'),
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: "9000"    

  },
  module: {
    rules: [
      //Aqui van los loaders
      {   
        //test: Que tipo de archivo quiero reconocer.
        //use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: [
			{loader: 'style-loader'},
			{loader: 'css-loader'}
		]
      }
    ]
  }
}

