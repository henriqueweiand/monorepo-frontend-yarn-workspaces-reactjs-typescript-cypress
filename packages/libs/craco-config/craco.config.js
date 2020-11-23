const { getLoader, loaderByName } = require('@craco/craco')
const path = require('path')
const config = require(path.resolve(__dirname, '..', '..', '..', 'tsconfig.json'))

module.exports = {
	webpack: {
		alias: Object.keys(config.compilerOptions.paths).reduce((prev, next) => {
			return {
				...prev,
				[next]: path.resolve(__dirname, '..', '..', '..', config.compilerOptions.paths[next][0])
			};
		}, {}),
		plugins: [],
		configure: (webpackConfig, { env, paths }) => {
			const { isFound, match } = getLoader(
				webpackConfig,
				loaderByName('babel-loader')
			)
			if (isFound) {
				const include = Array.isArray(match.loader.include)
					? match.loader.include
					: [match.loader.include]
					match.loader.include = include.concat['./libs/uikit']
			}

			return webpackConfig
		}
	}
}
