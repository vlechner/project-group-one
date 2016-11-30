module.exports = {
	formats: {
		css: {
			name: 'Style',
			transforms: ['postcss']
		},
		jsx: {
			name: 'Component',
			transforms: ['babel', 'react-to-markup']
		},
		md: {
			name: 'Documentation',
			transforms: []
		}
	},
	mount: {
		format: 'jsx',
		name: 'Component',
		transforms: ['babel', 'react-mount', 'browserify']
	}
};
