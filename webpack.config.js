    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
        entry: {
            main: './src/index.js',
            team: './src/pages/team.js',
            news: './src/pages/news.js' 
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js', 
            publicPath: ''
        },

        mode: 'development',
        devServer: {
            static: path.resolve(__dirname, './dist'),
            compress: true,
            port: 8081,

            open: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: '/node_modules'
                },
                {
                    test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|avif|webp)$/,
                    type: 'asset/resource'
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                        'postcss-loader'
                    ]
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                chunks: ['main'] 
            }),
            new HtmlWebpackPlugin({
                template: './src/pages/news.html',
                filename: 'news.html',
                chunks: ['main'] 
            }),
            new HtmlWebpackPlugin({
                template: './src/pages/team.html',
                filename: 'team.html',
                chunks: ['team'] 
            }),
    

            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(),
        ]
    };

