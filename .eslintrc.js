module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'unused-imports', 'simple-import-sort', 'prettier'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'prettier/prettier': 'error',
		'react/react-in-jsx-scope': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
		],
	},
};
