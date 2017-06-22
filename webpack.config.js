module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'react-hmre']
            }
        },
        {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
            }]
    }
};