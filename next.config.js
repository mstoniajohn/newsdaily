// next.config.js
module.exports = {
	webpack5: true,

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
