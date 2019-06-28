let express = require("express"),
  app = express();

let getProduct = require("./getProduct");

app.get("/", (req, res) => {
  getProduct("https://www.americanas.com.br/produto/134253783");
});

app.listen("8081");
