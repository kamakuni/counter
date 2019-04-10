const webpack = require('webpack')

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                exclude: '/node_modules/',
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*','.ts','.tsx','.js']
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
        contentBase: './dist'
    }
};
