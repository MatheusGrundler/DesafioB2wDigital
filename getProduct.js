//requires
let request = require("request");
cheerio = require("cheerio");

let getProduct = path => {
  url = path;

  request(url, (error, response, html) => {
    if (!error) {
      //objeto html
      let $ = cheerio.load(html);

      //Definindo variáveis e trazendo resultados
      let id = $(".brNcBx")
        .text()
        .trim();

      let breadcrumbs = [];

      let name = $(".fPUiKP")
        .find("h1")
        .text()
        .trim();

      let img = $(".gallery")
        .find("img")
        .attr("src")
        .trim();

      let seller = $(".seller-name-container span.TextUI-sc-1hrwx40-0")
        .text()
        .trim();

      let price = $(".main-offer__ParagraphUI-sc-1oo1w8r-0 .sales-price")
        .text()
        .trim();

      //transformando string em Nunmber
      id = parseInt(id.replace(/[{(Cód.)}]/g, ""));

      //inserindo os breadcrumbs no array
      $(".BreadcrumbContainer-iw976r-0 span").each(function(i) {
        breadcrumbs.push($(this).text());
      });

      //tirando o R$ e transformando em Number
      price = price.replace("R$ ", "");
      price = price.replace(".", "");
      price = parseFloat(price.replace(",", "."));

      //inserindo valores no objeto result
      let result = {
        id: id,
        breadcrumbs: breadcrumbs,
        name: name,
        img: img,
        seller: seller,
        price: price
      };

      //Imprimindo no console o result como json
      console.log(JSON.stringify(result));
    }
  });
};

module.exports = getProduct;
