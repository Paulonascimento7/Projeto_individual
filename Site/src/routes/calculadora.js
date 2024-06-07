var express = require("express");
var router = express.Router();

var calculadoraController = require("../controllers/calculadoraController");

//Recebendo os dados do html e direcionando para a função cadastrar de calculadoraController.js

router.post("/cadastrar", function (req, res) {
    calculadoraController.cadastrar(req, res);
});


router.post("/exibir", function (req, res) {
    calculadoraController.exibir(req, res);
});

// router.get("/listar/:idUsuario", function (req, res) {
//     avisoController.listarPorUsuario(req, res);
// });

module.exports = router;