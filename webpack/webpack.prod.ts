import { Configuration, EnvironmentPlugin } from 'webpack';
import merge from 'webpack-merge';
import config from './webpack.config';
import { configDotenv } from 'dotenv';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

configDotenv({ path: './.env.production' });

const prodConfig: Configuration = merge(config, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
		splitChunks: {
			chunks: 'all',
			name: 'chunk',
		},
	},
	plugins: [new EnvironmentPlugin({ ...process.env })],
});

export default prodConfig;
