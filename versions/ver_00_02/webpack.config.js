const path = require('path');
module.exports = {
	context: path.resolve(__dirname, 'react_app'),
	entry:  './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};

