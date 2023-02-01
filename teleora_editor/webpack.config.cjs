// This assignment cannot be converted to an import because it is used by webpack.
const path = require("path");

module.exports = {

    // bundling mode
    mode: "production",

    // entry files
    entry: "./src/main.ts",

    // output bundles (location)
    output: {
        path: path.resolve( __dirname, "dist", "js"),
        filename: "main.js",
    },

    // file resolutions
    resolve: {
        extensions: [".ts", ".js"],
    },

    // loaders
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    optimization: {
        minimize: true
    }
};
