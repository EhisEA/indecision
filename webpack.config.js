const path = require('path');
const htmlP= require('html-webpack-plugin');

module.exports={
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname, '/public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
               
                test:/\.js$/,
                exclude:/node_module/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [new htmlP({
        template: './src/index.html'
    })
],
devtool: 'cheap-module-eval-source-map'

}
