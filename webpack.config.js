const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        team: './src/pages/team.js',
        team_dota2: './src/pages/team.js',
        news: './src/pages/news.js',
        cup: './src/pages/cup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', 
        chunkFilename: 'chunks/[name].chunk.js',
        publicPath: '/wp-content/themes/CyberSport/js/',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        port: 8081,
        open: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                default: {
                    enforce: true,
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules',
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf|avif|webp)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html',
            filename: 'news.html',
            chunks: ['news'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/team.html',
            filename: 'team.html',
            chunks: ['team'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/team_dota2.html',
            filename: 'team_dota2.html',
            chunks: ['team_dota2'],
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/cup.html',
            filename: 'cup.html',
            chunks: ['cup'],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};