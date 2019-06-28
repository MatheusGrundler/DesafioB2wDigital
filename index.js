var express = require("express"),
    fs = require("fs"),
    request = require("request"),
    cheerio = require("cheerio"),
    app = express();

// Passo 1
app.get("/raspagem", function(req, res) {
    url = "https://www.americanas.com.br/produto/133718358";

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            // Objeto que irá armazenar a tabela
            var resultado = [];

            var id = $(".brNcBx")
                .text()
                .trim();

            var breadcrumbs = $(".BreadcrumbContainer-iw976r-0").each(function(i) {
                console.log(
                    $(this)
                    .find("span")
                    .text()
                    .trim()
                );
            });

            var title = $(".fPUiKP")
                .find("h1")
                .text();
            var imagen = $(".gallery")
                .find("img")
                .attr("src");

            var seller = $("seller-00776574000660").text();
            var price = $(".sales-price").text();
            console.log(price);
            process.exit();

            // Passo 3
            // Manipulando o seletor específico para montar nossa estrutura
            // Escolhi não selecionar a primeira linha porque faz parte do header da tabela
            // $(".ViewSection-oocyw8-2").each(function(i) {
            //     // Obtendo as propriedades da tabela.
            //     // O método .trim() garante que irá remover espaço em branco

            //     console.log($(this).find("span"));
            //     process.exit();

            //     var codigo = $(this)
            //         .find("td")
            //         .eq(0)
            //         .text()
            //         .trim(),
            //         orgao = $(this)
            //         .find("td")
            //         .eq(1)
            //         .text()
            //         .trim(),
            //         valorTotal = $(this)
            //         .find("td")
            //         .eq(2)
            //         .text()
            //         .trim();

            //     // Inserindo os dados obtidos no nosso objeto
            //     resultado.push({
            //         codigo: codigo,
            //         orgao: orgao,
            //         total: valorTotal
            //     });
            // });
            fs.writeFile(
                "resultado.json",
                JSON.stringify(resultado, null, 4),
                function(err) {
                    console.log(
                        "JSON escrito com sucesso! O arquivo está na raiz do projeto."
                    );
                }
            );
        }
    });
});

app.listen("8081");
exports = module.exports = app;