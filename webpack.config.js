var webpack = require('webpack');
var copy = require("copy-webpack-plugin");
//var ClosureCompiler = require('google-closure-compiler-js').webpack;

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
                loader: 'style!raw!sass!import-glob'
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

if (~process.argv.indexOf('--dash')) {

    var Dashboard = require('webpack-dashboard');
    var DashboardPlugin = require('webpack-dashboard/plugin');

    var dashboard = new Dashboard();

    module.exports.plugins.push(
        new DashboardPlugin(dashboard.setData)
    );
}


if(~process.argv.indexOf('--crush')) {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            output: { comments: false },
            compress: { warnings: false },
        }),
        // new ClosureCompiler({
        //   options: {
        //     languageIn: 'ECMASCRIPT5',
        //     languageOut: 'ECMASCRIPT5',
        //     compilationLevel: 'ADVANCED',
        //     warningLevel: 'QUIET',
        //   },
        // })
    )
}

module.exports.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: ~process.argv.indexOf('--dev')
    })
);
