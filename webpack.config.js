const path = require("path");
const webpack = require("webpack");
const htmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin")

console.log(path.resolve("./plugins/app/myJQueryPlugin.js"));

module.exports = {
    entry: {
        "index": "./index"
    },
    devtool: "source-map",  // "nosources-source-map",
    output: {

        path: path.join(__dirname, "/dist/"), // output folder
        publicPath: "./",
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },

    resolve: {
        extensions: [".ts", ".js", ".txt", ".json", ".css", ".less", ".scss", ".saas"],
        alias: {
            "myjqPlugin": path.resolve("./plugins/app/myJQueryPlugin.js"),
            "jquery": require.resolve("jquery"), // --> node_modules\jquery\dist\jquery.js   
        },
    },

    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, "/dist/")),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        new htmlWebPackPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'index',           
            filename: 'index.bundle.js' 
        }),       
    ],

    module: {
        rules: [{
                use: "exports-loader?window['$']",  
                test: /jQuery.1.4.2.js$/
            },
            {
                test: /\.ts$/,
                loader: "ts-loader"
            }, {
                test: /\.txt$/,
                use: 'raw-loader'
            },
        ]
    }
}