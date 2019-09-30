const path = require('path'); 4.4k (gzipped: 1,8K)

module.exports = {
    entry:  {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    }
};