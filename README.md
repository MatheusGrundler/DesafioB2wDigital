# Module getProduct(url);

### Descrição
  Módulo Node.js que permite receber uma URL de um produto da americanas.com e retorna um JSON com informação deste produto.
### Utilização
  *index.js*
```javascript
let express = require("express"),
  app = express();
  
//Importação do módulo
let getProduct = require("./getProduct");

   app.get("/", (req, res) => {

  //ativando a função, necessário passar uma URL como parâmetro
  getProduct("url");
  
});

app.listen("8081");
```
### Parâmetros
 **url** 
 
 Tipo: STRING;
 
 Descrição: url do produto que deseja pegar informações;
 
 ### Resultado
 **url** = *https://www.americanas.com.br/produto/134253783*
 ```javascript
  {  
   "id":134253783,
   "breadcrumbs":[  
      "página inicial",
      "celulares e smartphones",
      "smartphone",
      "samsung galaxy",
      "galaxy m",
      "galaxy m20"
   ],
   "name":"Smartphone Samsung Galaxy M20 64GB Dual Chip Android 8.1 Tela 6.3\" Octa-Core 4G Câmera 13MP + 5MP - Preto",
   "img":"https://images-americanas.b2w.io/produtos/01/00/oferta/134253/7/134253791_1GG.jpg",
   "seller":"Americanas.com",
   "price":1199
}
 ```
