var webpack = require('webpack');
var ExtractText = require("extract-text-webpack-plugin");
// var copy = require("copy-webpack-plugin");

module.exports = {
    entry:  [
        './src/scripts/index.js',
        './src/styles/bootstrap/bootstrap.scss',
        './src/styles/index.scss',
    ],
    output: {
        path:     'build',
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                include: __dirname + '/src',
                query: {
                    presets: ['es2015'],
                }
            },
            {
                test: /\.scss/,
                loader: ExtractText.extract('style', 'css!sass')
            }
        ],
    },
    plugins: [
        new ExtractText('main.css'),
        // new copy([
        //     { from: './build/main.css', to: '/website/static'},
        // ], '/var/www/html')
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};


// TODO: 
// copy

// webpack 2 / tree shake
// react
// hot reload
// async