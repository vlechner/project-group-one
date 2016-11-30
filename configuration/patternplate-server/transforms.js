'use strict';

module.exports = {
	'babel': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			presets: ['es2015', 'react'],
			plugins: ['transform-object-rest-spread']
		}
	},
	'browserify': {
		inFormat: 'js',
		outFormat: 'js',
		vendors: ['react', 'react-dom']
	},
  postcss: {
    inFormat: 'css',
    outFormat: 'css',
  },
	'react': {
		inFormat: 'jsx',
		outFormat: 'js'
	},
	'react-mount': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html',
		opts: {
			automount: true
		}
	}
};
