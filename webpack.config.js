const webpack = require('webpack')

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: '/node_modules/',
                use: ['babel-loader','ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*','.ts','.tsx','.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js', 
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};
