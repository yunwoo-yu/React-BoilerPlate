import CopyWebpackPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration, ProvidePlugin } from 'webpack';

const config: Configuration = {
	entry: './src/index.tsx',
	target: 'web',
	output: {
		filename: 'static/js/[name].[contenthash:8].js',
		path: path.resolve('dist'),
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
		publicPath: 'auto',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		plugins: [new TsconfigPathsPlugin()],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'public/index.html',
			filename: 'index.html',
			favicon: './public/favicon.ico',
			minify: {
				collapseWhitespace: true,
				keepClosingSlash: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public',
					to: './',
					globOptions: {
						ignore: ['**/index.html'],
					},
				},
			],
		}),
		new ProvidePlugin({ React: 'react' }),
		new ForkTsCheckerWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'static/css/[name].[contenthash:8].css',
			chunkFilename: 'static/css/[id].[contenthash:8].css',
		}),
		new ESLintPlugin(),
	],
	module: {
		rules: [
			{
				// Babel Loader
				test: /\.(tsx|ts|js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
				},
			},
			{
				// font 설정
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset',
				generator: {
					filename: 'static/assets/fonts/[name].[contenthash:8][ext]',
				},
			},
			{
				// svgr 설정
				test: /\.svg$/,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack'],
			},
			{
				// css 최적화 (styled라 큰 의미 없음)
				test: /\.css$/i,
				// CSS Loader → MiniCssExtractPlugin.loader 로더를 사용해 추출
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				// HTML Loader
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
		],
	},
};

export default config;
