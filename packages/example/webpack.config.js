const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        usedExports: true,
    },
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
                    <body class="body">
                        <h1>Example App</h1>
                        <button class="trigger">Trigger example button</button>
                        <button class="add">Add test button only once</button>
                        <button class="example">Example button</button>
                        <button class="test">Initial Test</button>
                    </body>
                </html>
            `,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.build.json',
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
};
