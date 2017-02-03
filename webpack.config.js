const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;

console.info('Compile mode: '+NODE_ENV);

module.exports={
    //entry: {
    //    home: "./frontend/home.es6",
    //    about: "./frontend/about.es6"
    //},
    context: __dirname+'/frontend/',
    entry: {
        home: "./home.es6",
        about: "./about.es6",
        welcome: "./welcome.es6"
    },

    output: {
        path: __dirname+'/public',
        //path: __dirname + "/dist",
        filename: "[name].compiled.js",
        library: "[name]"
    },

    //watch: NODE_ENV=='development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV=='development'?"source-map":false,

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.EnvironmentPlugin({ 'NODE_ENV':'development' }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common" // Собирает все общие модули для всех страниц в файл output:[name] -> common.compiled.js
        })
    ],

    resolve:{
        extensions: [".js",".es6.js"],
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
