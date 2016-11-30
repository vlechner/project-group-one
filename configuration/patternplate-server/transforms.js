'use strict';

module.exports = {
  'babel': {
    inFormat: 'js',
    outFormat: 'js',
    opts: {
      plugins: ['transform-object-rest-spread'],
      presets: ['es2015', 'react']
    }
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
		outFormat: 'html'
	},
	'postcss': {
		inFormat: 'css',
		outFormat: 'css',
		plugins: {},
		opts: {}
	}
};
