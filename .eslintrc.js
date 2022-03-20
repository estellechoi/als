module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:json/recommended'],
	plugins: ['prettier', '@typescript-eslint'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 8,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		// https://github.com/prettier/eslint-plugin-prettier#options
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
	},
	overrides: [
		{
			files: ['**/*.ts'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
				warnOnUnsupportedTypeScriptVersion: false,
			},
		},
	],
}
