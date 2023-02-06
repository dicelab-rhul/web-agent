// This assignment cannot be converted to imports because it is used by webpack.
const { merge } = require("webpack-merge");

module.exports = merge(require("./webpack.shared-config.cjs"), {
    // Bundling mode
    mode: "production",
    optimization: {
        minimize: true
    }
});
