let webpack = require('webpack');

// TODO
// tree shaking with import * as ...

module.exports = (env={}) => {

    let styleLoaders, babelPresets;

    let config = {

        entry : [
            './modules/js/index.js'
        ],


        output: {
            path:     'static',
            filename: 'bundle.js',
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: babelPresets = [
                                    ['es2015', { modules: false }],
                                    'stage-0'
                                ]
                            }
                        }
                    ]
                },
                styleLoader = {
                    test: /\.scss/,
                    use: [
                        { loader:'style-loader' },
                        { loader:'raw-loader' },
                        { loader:'sass-loader' },
                        { loader:'import-glob-loader' },
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [
                        { 
                            loader:'svg-url-loader',
                            options: {
                                noquotes: true
                            }
                        },
                        { loader:'svgo-loader' },
                    ]
                }
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                __DEV__: env.dev
            }),
        ]

    }

    if (env.devServer) {
        config.output.path = '/';

        config.devServer = {
            contentBase: __dirname + '/templates'
        };
    }
    
    if (env.esLint) {
        config.module.rules.push({
            test: /\.js$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            options: {
                configFile: '.eslintrc',
                failOnWarning: false,
                failOnError: false,
                emitError: false,
                fix: true
            }
        })
    }

    if (env.cssModules) {
        // replace raw-loader with css-loader
        let rawLoader = styleLoader.use.find(d => d.loader=='raw-loader');
        rawLoader.loader = 'css-loader?modules&localIdentName=[hash:base64:5]';
    }

    if (env.cssExtract) {
        let Extract = require('extract-text-webpack-plugin');
        styleLoader.loader = Extract.extract({
            fallbackLoader: 'style-loader',
            loader: styleLoader.use.splice(1)
        });
        delete styleLoader.use;
        config.plugins.push(new Extract('styles.css'));
    }

    if (env.closure) {
        let ClosureCompiler = require('google-closure-compiler-js').webpack;
        config.plugins.push(new ClosureCompiler({
            options: {
                languageIn: 'ECMASCRIPT5',
                languageOut: 'ECMASCRIPT5',
                compilationLevel: 'ADVANCED',
                warningLevel: 'QUIET',
            },
        }));
    }

    if (env.babili) {
        let BabiliPlugin = require('babili-webpack-plugin');

        config.plugins.push(new BabiliPlugin());

        // remove es2015 preset
        let index = babelPresets.findIndex(d => d == 'es2015' || d[0] == 'es2015');
        babelPresets.splice(index, 1);
    }

    if (env.dashboard) {
        let Dashboard = require('webpack-dashboard');
        let DashboardPlugin = require('webpack-dashboard/plugin');

        let dashboard = new Dashboard();

        config.plugins.push(
            new DashboardPlugin(dashboard.setData)
        );

        config.stats = 'errors-only'; // --hide-modules is also required
    }

    return config;
};