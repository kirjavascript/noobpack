var xtrkt = require("extract-text-webpack-plugin");

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
                loader: xtrkt.extract('style', 'css!sass')
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ],
    },
    plugins: [
        new xtrkt('main.css')
    ]
};


// TODO: 
// copy on production
// bootstrap
// webpack 2 / tree shake
// react
// hot reload
// async