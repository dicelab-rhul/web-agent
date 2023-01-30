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
    }
};
