const path = require('path');
const { merge } = require('webpack-merge');
const basic = require('../../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = merge(basic, {
    entry: {
        index: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Example App',
            templateContent: `
                <html>
                    <head>
                        <title>Example App</title>
                    </head>
                    <body>
                        <h1>Example App</h1>
                    </body>
                </html>
            `,
        }),
    ],
    resolve: {
        plugins: [new TsconfigPathsPlugin()],
    },
});
