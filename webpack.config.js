const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.ts"),
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name][contenthash].js",
        clean:  true,
        assetModuleFilename: "[name][ext]",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")]
            },
            {
               test: /\.scss$/,
               use: ["style-loader", "css-loader", "sass-loader"] 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Foreign Aid Kit",
            filename: "index.html",
            template: "src/template.html"
        }),
        // new BundleAnalyzerPlugin(),
    ]
}