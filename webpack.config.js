const path = require('path')

const HtmlWebPackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                //config for js files
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                //config for css files
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]

    },
    //plugin para o html
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })],
    devServer: {
        contentBase: './dist',
        watchContentBase:true,
        before: function (app, server) {
            app.get('/numbers', function (req, res) {

                let valorPage = req.param('page')
                let valorPerPage = req.param('perPage')

                generateNumbers = (valorPage, valorPerPage) => {
                    let numbersArray = []

                    return numbersArray
                }

                let generatedNumbers = generateNumbers(valorPage, valorPerPage)

                res.json({
                    "meta": {
                        "page": valorPage,
                        "perPage": valorPerPage
                    },
                    "data": generatedNumbers
                })
            })
        }
    }
}