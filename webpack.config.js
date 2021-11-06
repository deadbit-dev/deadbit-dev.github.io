const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'deadbit-dev',
            template: './template.html'
        }),
    ],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '...'],
    }
};
