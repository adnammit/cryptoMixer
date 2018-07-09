var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/theme/main.less',
        './src/main',
        // 'webpack-dev-server/client?http://127.0.0.0:8080'
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        publicPath: '/',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test:  /\.(js|jsx)$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
            }
        ]
    },
    devServer: {
        contentBase: "./src"
    }
};
