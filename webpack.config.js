const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
              filename: devMode ? '[name].css' : '[name].[hash].css',
              chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
    module: {
        rules: [{
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                            publicPath: (resourcePath, context) => {
                                // publicPath is the relative path of the resource to the context
                                // e.g. for ./css/admin/main.css the publicPath will be ../../
                                // while for ./css/main.css the publicPath will be ../
                                return path.relative(path.dirname(resourcePath), context) + '/';
                              },
                        },
     
                    },
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            },
        ]
    },

};