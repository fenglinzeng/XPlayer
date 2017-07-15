/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');

module.exports = {

    devtool: 'cheap-module-source-map',

    entry: {
        XPlayer: './src/XPlayer.js'
    },

    output: {
        path: path.resolve(__dirname, '..', 'demo'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        publicPath: '/'
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss']
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                            presets: ['env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            config: {
                                path: path.join(__dirname, 'postcss.config.js')
                            }
                        }
                    },
                    require.resolve('sass-loader')
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: require.resolve('url-loader'),
                options: {
                    'limit': 40000
                }
            }
        ]
    },

    devServer: {
        compress: true,
        contentBase: path.resolve(__dirname, '..'),
        clientLogLevel: 'none',
        quiet: false,
        open: true,
        historyApiFallback: {
            disableDotRule: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
    ],

    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    performance: {
        hints: false
    }

};