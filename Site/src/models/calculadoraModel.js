var database = require("../database/config")

function exibir(fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL")
    var instrucaoSql = `
        SELECT * from dados_dieta where fkUsuario = '${fkUsuario}' ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(peso, tmb, tdee, proteina, carboidrato, gordura, qtd_caloriasDiarias, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL")
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO dados_dieta (peso, tmb, tdee, proteina, carboidrato, gordura, qtd_caloriasDiarias, fkUsuario) VALUES ('${peso}', '${tmb}', '${tdee}', '${proteina}', '${carboidrato}', '${gordura}', '${qtd_caloriasDiarias}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibir,
    cadastrar
};
    