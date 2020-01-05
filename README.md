## Phone numbers generator

[![Greenkeeper badge](https://badges.greenkeeper.io/wps13/phone-numbers.svg)](https://greenkeeper.io/)

Gerador de telefones com custo incluído.

[Descrição do teste](https://github.com/EvoluxBR/front-end-test)

### O que foi feito

![](https://github.com/wps13/phone-numbers/blob/master/public/working.gif)

### Tecnologias Usadas

- RectJS
- Webpack
- Webpack-dev-server
- Babel
- HtmlWebPackPlugin
- css-loader
- Redux

### Como funciona

#### API

Criou-se uma falsa api, usando o webpack dev server. Essa api recebe a página que deseja ser acessada(page) e quantos items serão mostrados por página(perPage), no seguinte formato:

`/numbers?page=2&perPage=10`

retornando o seguinte resultado:

```json
{
  "meta": {
    "page": "2",
    "perPage": "10",
    "totalPages": 100
  },
  "data": [
    { "number": 555000009, "cost": "1.09" },
    { "number": 555000010, "cost": "1.10" },
    { "number": 555000011, "cost": "1.11" },
    { "number": 555000012, "cost": "1.12" },
    { "number": 555000013, "cost": "1.13" },
    { "number": 555000014, "cost": "1.14" },
    { "number": 555000015, "cost": "1.15" },
    { "number": 555000016, "cost": "1.16" },
    { "number": 555000017, "cost": "1.17" },
    { "number": 555000018, "cost": "1.18" },
    { "number": 555000019, "cost": "1.19" }
  ]
}
```

onde é mostrado a página que está sendo acessada, quantos itens serão retornados por página e o totatl de páginas na chave meta, já em data é retornado o número e o custo dele.
