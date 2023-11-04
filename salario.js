import entrada from 'readline-sync';

var salarios = [
    {ano: 2010, salario: 510.00, ipca: 5.91},
    {ano: 2011, salario: 545.00, ipca: 6.50},
    {ano: 2012, salario: 622.00, ipca: 5.48},
    {ano: 2013, salario: 678.00, ipca: 5.91},
    {ano: 2014, salario: 724.00, ipca: 6.41},
    {ano: 2015, salario: 788.00, ipca: 10.67},
    {ano: 2016, salario: 880.00, ipca: 6.29},
    {ano: 2017, salario: 937.00, ipca: 2.95},
    {ano: 2018, salario: 954.00, ipca: 3.75},
    {ano: 2019, salario: 998.00, ipca: 4.31},
    {ano: 2020, salario: 1045.00, ipca: 4.52}
];

console.log("Escolha uma das alternativas:");
console.log("\n");
console.log("1 - Listar o histórico do salário mínimo de 2010 à 2020");
console.log("2 - Listar o histórico do IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA");
console.log("\n");

var escolha = entrada.question("Digite o numero da sua escolha: ");

switch (escolha) {
    case '1':
        
        for (var sal of salarios) {

            var ano_sal = sal.ano;
            var valor_sal = sal.salario.toFixed(2);

            console.log("\n");
            console.log(" ".padStart(10, " ")+"Ano: ".padEnd(30,'.')+ano_sal);
            console.log(" ".padStart(10, " ")+"Salário mínimo: ".padEnd(30,'.')+"R$"+valor_sal.replace(".", ","));
        }
    break;

    case '2':
        
        for (var ip of salarios) {

            var ano_ip = ip.ano;
            var valor_ip = ip.ipca.toFixed(2);

            console.log("\n");
            console.log(" ".padStart(10, " ")+"Ano: ".padEnd(30,'.')+ip.ano);
            console.log(" ".padStart(10, " ")+"Inflação (IPCA): ".padEnd(30,'.')+valor_ip.replace(".", ",")+"%");
        }
        break;

    case '3':
        
        var array_dif = [];
        var contador = 1;
        array_dif[0] = 0;
        
        while (contador < salarios.length) {
        
            array_dif[contador] = salarios[contador].salario - salarios[contador-1].salario;
        
            contador++;
        
        }
        
        var contador = 1;
        salarios[0].dif = 0;
        
        while (contador < array_dif.length) {
        
            salarios[contador].dif = (array_dif[contador] / salarios[contador-1].salario) * 100;
        
        contador++;
        
        }

        for (var sal of salarios) {

            var ano_sal = sal.ano;
            var valor_sal = sal.salario.toFixed(2);
            var valor_ipc = sal.ipca.toFixed(2);
            var valor_dif = sal.dif.toFixed(2);

            console.log("\n");
            console.log(" ".padStart(10, " ")+"Ano: ".padEnd(30,'.')+ano_sal);
            console.log(" ".padStart(10, " ")+"Salário mínimo: ".padEnd(30,'.')+"R$"+valor_sal.replace(".", ","));
            console.log(" ".padStart(10, " ")+"Crescimento salarial: ".padEnd(30,'.')+valor_dif.replace(".", ",")+"%");
            console.log(" ".padStart(10, " ")+"Inflação IPCA: ".padEnd(30,'.')+valor_ipc.replace(".", ",")+"%");
        }
        break;
    
    default:
        console.log("Digite apenas 1, 2 ou 3.");
}