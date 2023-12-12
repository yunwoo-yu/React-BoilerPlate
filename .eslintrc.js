module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
	},
};
