const path = require('path');
const { merge } = require('webpack-merge');
const basic = require('../../webpack.config');

module.exports = merge(basic, {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
      },
});
