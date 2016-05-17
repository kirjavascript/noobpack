var webpack = require('webpack');
var copy = require("copy-webpack-plugin");

module.exports = {
    entry : [
        './modules/js/index.js',
        'webpack/hot/dev-server',
    ],
    output: {
        path:     'static',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/modules/js',
                query: {
                    presets: ['es2015'],
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
