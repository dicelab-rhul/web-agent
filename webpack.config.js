// This cannot be converted to ES modules because they are used by webpack.
const path = require("path");

module.exports = {
    // Bundling mode
    mode: "production",
    // Entry files
    entry: "./src/index.ts",
    // Output bundles (location)
    output: {
        path: path.resolve(__dirname, "static", "js"),
        filename: "index.js",
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
                exclude: [
                    /node_modules/
                ]
            }
        ]
    }
};
