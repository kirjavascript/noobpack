var xtract = require("extract-text-webpack-plugin");
// var copy = require("copy-webpack-plugin");

module.exports = {
    entry:  [
        './src/scripts/index.js',
        './src/styles/index.scss'
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
                loader: xtract.extract('style', 'css!sass')
            }
        ],
    },
    plugins: [
        new xtract('main.css'),
        // new copy([
        //     { from: './build/main.css', to: '/website/static'},
        // ], '/var/www/html')
    ]
};


// TODO: 
// copy
// webpack 2 / tree shake
// react
// hot reload
// async