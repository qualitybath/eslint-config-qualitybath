module.exports = {
	extends: ['defaults/configurations/airbnb'],
	env: {
		browser: false,
	},
	plugins: ['filenames'],
	rules: {
		indent: [2, 'tab'],
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
