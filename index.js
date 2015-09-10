module.exports = {
	extends: ['defaults/configurations/airbnb'],
	env: {
		browser: false,
	},
	plugins: ['filenames'],
	rules: {
		// Use tab for indentation http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/
		indent: [2, 'tab'],
		// allow anonymous functions
		'func-names': 0,
		// Enforce that filenames are camelcase
		'filenames/filenames': 2,
		// Prevent missing displayName in a React component definition
		'react/display-name': 2,
		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': 2,
		// Prevent missing props validation in a React component definition
		'react/prop-types': 2,
	},
};
