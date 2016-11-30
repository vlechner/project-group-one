'use strict';

module.exports = {
	formats: {
		css: {
			transforms: ['postcss']
		},
		jsx: {
			transforms: ['react', 'babel', 'react-to-markup']
		},
		md: {
			transforms: []
		}
	}
};
