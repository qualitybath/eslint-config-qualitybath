module.exports = {
	extends: ['airbnb'],
	parser: 'babel-eslint',
	env: {
		browser: false,
	},
	plugins: ['filenames'],
	rules: {
		// allow anonymous functions
		'func-names': 0,
		// Enforce that filenames are camelcase
		'filenames/match-regex': [2, '^[A-Za-z\.][A-Za-z0-9\-\.]+$'],
		// specify the maximum length of a line in your program`
		'max-len': [2, 120, 2, {
			'ignoreUrls': true,
			'ignoreComments': true,
		}],
		// disallow use of console
		'no-console': 2,
		// disallow parameter object manipulation
		'no-param-reassign': [2, { 'props': false }],
		// disallow use of variables before they are defined
		'no-use-before-define': [2, 'nofunc'],
		// Prevent missing displayName in a React component definition
		'react/display-name': [2, { 'ignoreTranspilerName': false }],
		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': 2,
		// Require ES6 class declarations over React.createClass
		'react/prefer-es6-class': 0,
		// Require stateless functions when not using lifecycle methods, setState or ref
		'react/prefer-stateless-function': 1,
		// allow calling setState in componentDidMount
		'react/no-did-mount-set-state': 0,
		// require or disallow space before function opening parenthesis
		// https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
		'space-before-function-paren': [2, 'never'],
	},
};
