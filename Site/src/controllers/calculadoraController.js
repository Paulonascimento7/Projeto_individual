var calculadoraModel = require("../models/calculadoraModel");

// function exibir(req, res) {
//     // var email = req.body.emailServer;
//     // var senha = req.body.senhaServer;
//     var fkUsuario = req.body.fkUsuarioServer;

//     if (fkUsuario == undefined) {
//         res.status(400).send("Seu id está undefined!");
//     }  else {

//         calculadoraModelModel.exibir()
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar);

//                                 if (resultadoAutenticar) {
//                                     res.json({
//                                         id: resultadoAutenticar[0].id,
                                        

//                                     });
//                                 } else {
//                                     res.status(204).json({ aquarios: [] });
//                                 }
                            
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

function exibir(req, res){
var fkUsuario = req.body.idUsuario; 

    calculadoraModel.exibir(fkUsuario).then (function (resultado){
        res.status(200).json(resultado);

    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage)
    })
} 
    
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
 
    var peso = req.body.pesoServer 
    var tmb = req.body.tmbServer
    var tdee = req.body.tdeeServer  
    var proteina = req.body.proteinaServer 
    var carboidrato = req.body.carboidratoServer 
    var gordura = req.body.gorduraServer
    var qtd_caloriasDiarias = req.body.qtd_caloriasDiariaServer
    var fkUsuario = req.body.fkUsuarioServer
    // var empresaId = req.body.empresaServer;

    // Faça as validações dos valores
    if (peso == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        calculadoraModel.cadastrar(peso, tmb, tdee, proteina, carboidrato, gordura, qtd_caloriasDiarias, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    exibir,
    cadastrar}