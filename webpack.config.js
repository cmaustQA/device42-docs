const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@docusaurus/Link': path.resolve(__dirname, 'mocks/Link'),
            '@theme/ThemedImage': path.resolve(__dirname, 'mocks/ThemedImage'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};
