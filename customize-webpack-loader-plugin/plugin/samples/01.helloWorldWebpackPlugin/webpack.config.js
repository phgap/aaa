const path = require('path');
const HelloWorldWebpackPlugin = require('./plugin/HelloWorldWebpackPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HelloWorldWebpackPlugin()
    ]
}