// This assignment cannot be converted to an import because it is used by webpack.
const path = require("path");

module.exports = {
    // Entry files
    entry: "./src/main.ts",
    // Output bundles (location)
    output: {
        path: path.resolve( __dirname, "dist", "js"),
        filename: "main.js",
    },
    // File resolutions
    resolve: {
        extensions: [".ts", ".js"],
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
