'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './app');

const plugins = [
    new HtmlWebpackPlugin({
        template: path.join(sourcePath, 'index.html'),
        path: buildPath,
        filename: 'index.html'
    })
];

const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
            'babel-loader',
        ],
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader?sourceMap',
        ],
    }
];

module.exports = {
    devtool: 'source-map',

    entry: [path.join(sourcePath, 'js/app.js')],

    output: {
        path: buildPath,
        publicPath: '/',
        filename: 'app-[hash].js',
    },
    plugins,
    module: {
        rules
    },
    devServer: {
        contentBase: sourcePath,
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true
    },
};