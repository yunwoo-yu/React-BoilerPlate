import { configDotenv } from 'dotenv';
import { EnvironmentPlugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';

import config from './webpack.config';

configDotenv({ path: './.env.development' });

const devServer: DevServerConfiguration = {
	port: 3000,
	static: false,
	open: true,
	compress: true,
	historyApiFallback: true,
	hot: true,
	client: {
		overlay: true,
	},
	// 프록시 서버 필요 시 사용 (ex : /api 로 가는 요청은 전부 localhost:8080 으로 보내라)
	// proxy: {
	// 	'/api': 'http:localhost:8080',
	// },
};

const devConfig = merge(config, {
	mode: 'development',
	devtool: 'source-map',
	optimization: {
		minimize: false,
		splitChunks: false,
	},
	plugins: [new EnvironmentPlugin({ ...process.env })],
	devServer,
});

export default devConfig;
