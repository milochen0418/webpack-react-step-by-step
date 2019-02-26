
module.exports = {
    entry:  {
        app: __dirname + '/src/index.jsx',
    },

    output: {
        path:     __dirname + '/www/builds',
        filename: 'bundle.js',
	    publicPath: "/builds/",
    },

    module: {
	rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } }
        ],

        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: __dirname + '/src',
            },
        ],
    },
};
