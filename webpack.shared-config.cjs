// This assignment cannot be converted to an import because it is used by webpack.
const path = require("path");

module.exports = {
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
