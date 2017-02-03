const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

console.info('Compile mode: '+NODE_ENV);

module.exports={
    entry: "./home.es6",
    output: {
        //path: __dirname + "/dist",
        filename: "build.compiled.js",
        library: "home"
    },

    //watch: NODE_ENV=='development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV=='development'?"source-map":false,

    plugins: [
        new webpack.EnvironmentPlugin({ 'NODE_ENV':'development' })
    ],

    resolve:{
        extensions: [".js"],
        modules: ["node_modules"]
    },

    module:{

        loaders: [{
            test: /\.es6\.js$/,
            loader: 'babel-loader?presets[]=es2015' //  or .babelrc file
        }]

    }
};

// Минификация в продакшн
if(NODE_ENV == 'production'){
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
             compress: {
               warnings: true
             }
        })
    )
}
