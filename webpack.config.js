const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'deadbit-dev',
            template: './src/assets/template.html'
        }),
    ],
    mode: 'development',
    //mode: 'production',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
            {
                test: /\.(glb|gltf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(frag|vert|glsl)$/,
                use: [
                    { 
                        loader: 'glsl-shader-loader',
                        options: {}  
                    }
                ]
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '...'],
    }
};
