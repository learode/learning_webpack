const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //the main or that which is the final parent of all imported or that which has no export

  output: {
    //resolve the path and create a dir called dist using the __dirname from nodejs
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', //name the bundled file
  },

  module: {
    rules: [
      {
        // test for any import having .png or .jpg of any letter case at the end of it.
        test: /\.(png|jpg)$/i,
        type: 'asset/resource', //its an asset file treat it different.
      },
    ],
  },
};
