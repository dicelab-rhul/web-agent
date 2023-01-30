// These assignments cannot be converted to imports because they are used by webpack.
const path = require("path");
const webpack = require("webpack");

module.exports = {
    // Plugins
    plugins: [
        new webpack.DefinePlugin({
            "process.platform": JSON.stringify(process.platform)
        }),
    ],
    // Bundling mode
    mode: "production",
    // Entry files
    entry: "./src/main.ts",
    // Output bundles (location)
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "main.js",
    },
    // File resolutions
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            "fs": false
        }
    },
    // Loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    }
};
