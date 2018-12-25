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
        watchContentBase: true,
        before: function (app, server) {
            app.get('/numbers', function (req, res) {

                let valorPage = req.param('page')
                let valorPerPage = req.param('perPage')
                let totalPages = Math.round(1000/valorPerPage)
                generateNumbers = (valorPage, valorPerPage) => {
                    let pageValue = valorPage
                    let perPageValue = valorPerPage
                    let baseNumber = 555000000
                    let numbers = { number: null, cost: null }
                    let limSuperior = (pageValue * perPageValue - 1)

                    let limInferior = (perPageValue < 10
                        ? (limSuperior > perPageValue ? (limSuperior - perPageValue + 1) : (perPageValue - limSuperior - 1))
                        : ((limSuperior > perPageValue) ? (limSuperior - perPageValue) : (perPageValue - limSuperior - 1)))

                    let data = []

                    for (let i = limInferior; i <= limSuperior; i++) {
                        numbers.number = baseNumber + i
                        if (i < 100) {
                            numbers.cost = (1 + i / 100).toFixed(2)
                        }
                        else {
                            let centena = 100
                            while (i <= centena && centena < 1000) {
                                centena += 100
                            }
                            numbers.cost = (1 + ((i % centena) / 100)).toFixed(2)
                        }
                        data.push(numbers)
                        numbers = {}
                    }

                    return data
                }

                let generatedNumbers = generateNumbers(valorPage, valorPerPage)

                res.json({
                    "meta": {
                        "page": valorPage,
                        "perPage": valorPerPage,
                        "totalPages":totalPages
                    },
                    "data": generatedNumbers
                })
            })
        }
    }
}