var webpack = require('webpack');
var copy = require("copy-webpack-plugin");

module.exports = {
    entry : [
        './modules/js/index.js',
        //'webpack/hot/dev-server',
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-url?noquotes!svgo'
            },
            { 
                test: /\.html?$/, loader: "ejs-compiled-loader?delimiter=%3F"
            }
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
