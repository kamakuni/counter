const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.ts','.tsx','.js', '.json']
    },
    devServer: {
        contentBase: "dist",
        open: true
    }
};
