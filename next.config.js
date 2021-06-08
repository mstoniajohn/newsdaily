// next.config.js
module.exports = {
	future: {
		webpack5: true,
	},
	webpack: function (config, options) {
		console.log(options.webpack.version); // 5.18.0
		config.experiments = {};
		return config;
	},
	images: {
		domains: [
			'img.huffingtonpost.com',
			'cdn.mos.cms.futurecdn.net',
			'imagez.tmz.com',
		],
	},
	// Webpack 5 is enabled by default
	// You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
	// webpack5: false,
};
