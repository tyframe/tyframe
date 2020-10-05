module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: 'ts-loader',
            options: {
                configFile: 'tsconfig.build.json',
            }
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
};
