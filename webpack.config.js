const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    devServer: {
        contentBase: "dist",
        open: true
    }
};
