var express = require("express"),
  fs = require("fs"),
  request = require("request"),
  cheerio = require("cheerio"),
  app = express();

// Passo 1
app.get("/", function(req, res) {
  url = "https://www.americanas.com.br/produto/133756522";

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);

      var id = $(".brNcBx")
        .text()
        .trim();

      var breadcrumbs = [];

      var name = $(".fPUiKP")
        .find("h1")
        .text();

      var img = $(".gallery")
        .find("img")
        .attr("src");

      var seller = $(".seller-name-container span.TextUI-sc-1hrwx40-0").text();

      var price = $(
        ".main-offer__ParagraphUI-sc-1oo1w8r-0 .sales-price"
      ).text();

      id = parseInt(id.replace(/[{(Cód.)}]/g, ""));

      $(".BreadcrumbContainer-iw976r-0 span").each(function(i) {
        breadcrumbs.push($(this).text());
      });


      price = price.replace("R$ ", "");
      price = price.replace(".", "");
      price = parseFloat(price.replace(",", "."));

      var resultado = {
        id: id,
        breadcrumbs: breadcrumbs,
        name: name,
        img: img,
        seller: seller,
        price: price
      };

      console.log(JSON.stringify(resultado));
    }
  });
});

app.listen("8081");
exports = module.exports = app;
