module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.html$/, loader: "html"},
            {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
           }
        ]
    }
};
