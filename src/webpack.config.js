module.exports = {
    entry:{
        index:"./js/index"
    },
    output:{
        filename:"[name].js"
    },
    devtool:"source-map",
    resolve:{
        extensions:[".js"]
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude: __dirname+"node_modules",
                query:{
                    presets:["es2015"]
                }
            }
        ]
    }
}