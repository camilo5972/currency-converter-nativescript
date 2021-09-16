const webpack = require("@nativescript/webpack");
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = (env, argv) => {
	webpack.init(env);

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	webpack.chainWebpack(config => {
		// we add the plugin
		config.plugin('HotModuleReplacementPlugin').use(HotModuleReplacementPlugin)
	})

	return webpack.resolveConfig();
};


