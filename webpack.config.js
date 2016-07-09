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
            },
            {
                test: /\.svg$/,
                loader: 'svg-url?noquotes!svgo'
            },
        ],
    },
    plugins: [
        new copy([
            { from: './templates', to: '.'},
        ]),
    ]
};

if(~process.argv.indexOf('--crush')) {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: { comments: false },
            compress: { warnings: false },
        })
    )

}

module.exports.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: ~process.argv.indexOf('--dev')
    })
);
