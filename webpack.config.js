const path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
    	main:'./src/script/main.js',
    	a:'./src/script/a.js',
    	b:'./src/script/b.js',
    	c:'./src/script/c.js'
    },

    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://www.cdn.com/'
    },
    plugins:[
        // new htmlWebpackPlugin({
        //   filename:'index-[hash].html',
        //   template: 'index.html',
        //   inject:'head',
        //   title:'1234'
        // })
        new htmlWebpackPlugin({
          filename:'a.html',
          template: 'index.html',
          inject:'body',
          title:'a',
          // chunks:["main","a"]
          excludeChunks:["b","c"]
        }),
        new htmlWebpackPlugin({
          filename:'b.html',
          template: 'index.html',
          inject:'body',
          title:'b',
          // chunks:["b"]
          excludeChunks:["a","c"]
        }),
        new htmlWebpackPlugin({
          filename:'c.html',
          template: 'index.html',
          inject:'body',
          title:'c',
          // chunks:["c"]
          excludeChunks:["a","b"]
        })


    ]

}