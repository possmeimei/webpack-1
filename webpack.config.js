const base = require('./webpack.config-base.js')

module.exports = {
    ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use:["style-loader","css-loader"],
            },
        ],
    },
};


