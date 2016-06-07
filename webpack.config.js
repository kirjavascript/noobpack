var webpack = require('webpack');
var copy = require("copy-webpack-plugin");

module.exports = {
    entry : [
        './modules/js/index.jsx',
        //'webpack/hot/dev-server',
    ],
    output: {
        path:     'static',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.jsx/,
                loader: 'babel',
                include: __dirname + '/modules/js',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass!import-glob'
            }
        ],
    },
    plugins: [
        new copy([
            { from: './templates', to: '.'},
        ]),
    ]
};
