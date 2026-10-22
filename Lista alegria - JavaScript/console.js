// // Atividade 1 

// let idade = 17;

// if (idade >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// //Atividade 2 

// let numeroUm = -8;

// if (numeroUm > 0) {
//     console.log("Positivo");
// } else if (numeroUm < 0) {
//     console.log("Negativo");
// } else {
//     console.log("Zero");
// }

// //Atividade 3
// let numeroDois = 23

// if (numeroDois%2==0){
//     console.log("É um número par!")
// } else {
//     console.log ("É um número ímpar!")
// }

// //Atividade 4
// let a = 35;
// let b = 42;

// if (a > b) {
//     console.log("A é maior");
// } else if (a < b) {
//     console.log("B é maior");
// } else {
//     console.log("Os dois são iguais");
// }

// //Atividade 5 
// let idadeUm = 20;
// let ingressoValido = true;

// if (idade >= 18 && ingressoValido) {
//     console.log("Entrada autorizada");
// } else {
//     console.log("Entrada negada");
// }

// //Atividade 6
// let valorCompra = 150;
// let clienteVIP = true;
// let desconto = 0;

// if (valorCompra >= 200 || clienteVIP) {
//     desconto = valorCompra * 0.20;
// }

// let valorFinal = valorCompra - desconto;

// console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)

// //Atividade 7
// let temperatura = 85;

// if(temperatura <40){
//     console.log(`Temperatura baixa`)
// } else if(temperatura <=40 && temperatura >=80){
//     console.log (`Temperatura normal`)
// }else {
//     console.log(`Superaquecimento`)
// }

// //Atividade 8
// let nota = 8;
// let frequencia = 80;

// if(nota >= 7 && frequencia >= 75){
//     console.log(`Aluno aprovado!`)
// } else {
//     console.log(`Reprovado!`)
// }

// //Atividade 9 **
// let idadeDois = -17;

// if(idadeDois >=0 && idadeDois <=12){
//     console.log(`Criança`)
// } else if(idadeDois >= 13 || idadeDois <= 17){
//     console.log(`Adolecente`)
// } else if (idadeDois >= 18 || idadeDois <= 59){
//     console.log(`Adulto`)
// }else if(idadeDois >= 60){
//     console.log(`Idoso`)
// }else {
//     console.log(`Idade invalida!`)
// }

// // Atividade 10
// let horario = 19;
// let autorizado = true;

// if(horario >= 8 && horario <= 18){
//     console.log(`Acesso autorizado`)
// } else{
//     console.log(`Acesso negado`)
// }

// // Atividade 11
// let renda = 2500;
// let possuiRestrição = false;

// if(renda >=3000 && !possuiRestrição){
//     console.log(`Aprovado`)
// }else{
//     console.log(`Negado`)
// }

//Atividade 12
// let totalCompra = 100;
// let cupomFrete = true;
// let frete = 25;

// if (totalCompra >=250 || cupomFrete === true){
//     frete = 0;
//     console.log(`Frete grátis ${frete}`)
// }else
//     {
//     console.log(`Não possui frete grátis ${totalCompra + frete}`)
// }

//Atividade 13
// let pontos = 50;

// if(pontos <100){
//     console.log(`inicante`)
// }else if(pontos >=100 && pontos <= 499){
//     console.log(`Bronze`)
// }else if(pontos >=500 && pontos <=999){
//     console.log(`Prata`)
// } else{
//     console.log(`Ouro`)
// }

//Atividade 14
// let usuario = "aluno";
// let senha = "senai123";

// if (usuario === "aluno" && senha === "senai123"){
//     console.log(`Liberado`)
// } else{
//     console.log(`Negado`)
// }


// //Atividade 15
// let cor = "amarelo";

// if(cor === "amarelo"){
//     console.log(`Atenção`)
// } else if(cor === "verde"){
//     console.log(`Siga`)
// }else if (cor === "vermelho"){
//     console.log(`Pare`)
// }else {
//     console.log(`Inválido`)
// }

//Atividade 16
// let dia = 6;

// if(dia >1 || dia <5){
//     console.log(`Dia de semana`)
// }else{
//     console.log(`Fim de semana`)
// }

//Atividade 17
// let idade = 2;
// let possuiCNH = true;

// if(idade >=18 && possuiCNH === true){
//     console.log (`Pode dirigir`)
// }else if (idade <18){
//     console.log(`É necessário ter mais de 18 anos!`)
// }else if(possuiCNH === false){
//     console.log(`É necessario ter CNH`)
// } 

//Atividade 18
// let estoque = 4;
// let quantidadePedida = 2;

// if (estoque < quantidadePedida) {
//     console.log(`Não foi possível autorizar venda`);
// } else if (quantidadePedida > 0 && quantidadePedida <= estoque) {
//     console.log(`Venda autorizada`);
//     console.log(`O novo estoque é de: ${estoque - quantidadePedida}`)
// }

//Atividade 19
// let nota = 5.8;
// let frequencia = 82;

// if(frequencia <75){
//     console.log(`Reprovado por frequencia`)
// }else if(nota <5){
//     console.log(`Reprovado por nota`)
// } else if(nota >=5 && nota <=7){
//     console.log(`Recuperação`)
// }else if (nota >= 7) {
//     console.log(`Aprovado`)
// }

// //Atividade 20
// let valorCompra = 380

// if (valorCompra <100){
//     console.log(`Sem desconto`)
// }else if(valorCompra == 100 && valorCompra <300){
//     console.log(`Desconto de 5%, sua compra é de ${valorCompra - 0.05}`)
// }else if(valorCompra == 300 && valorCompra <500){
//     console.log(`Desconto de 10%, sua compra agora é de ${valorCompra - 0.10}`)
// }else if (valorCompra >500){
//     console.log(`Desconto de 15%, sua compra é de ${valorCompra - 0.15}`)
// }

// //Atividade 21
//     let ladoA = 3;
//     let ladoB = 4;
//     let ladoC = 5;

//     if(ladoA, ladoB , ladoC <=0){
//         console.log(`Triangulo Invalido`)
//     }else if(ladoA + ladoB > ladoC){
//         console.log(`É um triangulo`)
//     } else if(ladoB + ladoC > ladoA){
//         console.log(`É um triangulo`)
//     } else if(ladoC + ladoB > ladoA){
//         console.log(`É um triangulo`)
//     }

//Atividade 22
// let ladoA = 6;
// let ladoB = 6;
// let ladoC = 4;

// if(ladoA === ladoB && ladoC === ladoA){
//     console.log(`Triangulo equilatero`)
// }else if(ladoA===ladoB  || ladoA === ladoC || ladoB === ladoC ){
//     console.log(`Triangulo equilatero`)
// }else{
//     console.log(`Triangulo Escaleno`)
// }

// // 23

// let peso = 72;
// let altura = 1.75;

// if (peso <= 0 || altura <= 0) {
//     console.log("Peso ou altura inválidos");
// } else {
//     let imc = peso / (altura ** 2);

//     console.log(`IMC: ${imc.toFixed(2)}`);

//     if (imc < 18.5) {
//         console.log("Abaixo do peso");
//     } else if (imc < 25) {
//         console.log("Faixa considerada normal");
//     } else if (imc < 30) {
//         console.log("Sobrepeso");
//     } else {
//         console.log("Obesidade");
//     }
// }

// // 24

// let horas = 5;
// let clienteConveniado = true;
// let valor = 0;

// if (horas <= 0) {
//     console.log("Quantidade de horas inválida");
// } else {
//     if (horas <= 2) {
//         valor = 10;
//     } else {
//         valor = 10 + (horas - 2) * 4;
//     }

//     if (clienteConveniado) {
//         valor = valor * 0.80;
//     }

//     console.log(`Valor final: R$ ${valor.toFixed(2)}`);
// }

// // 25

// let velocidade = 92;
// let limite = 80;

// if (velocidade <= limite) {
//     console.log("Dentro do limite");
// } else if (velocidade <= limite * 1.20) {
//     console.log("Acima do limite");
// } else {
//     console.log("Muito acima do limite");
// }

// // 26

// let media = 9.1;
// let frequencia = 92;
// let rendaFamiliar = 2400;

// if (media >= 9 && frequencia >= 90 && rendaFamiliar <= 2500) {
//     console.log("Bolsa integral");
// } else if (
//     media >= 7 &&
//     frequencia >= 75 &&
//     rendaFamiliar <= 4000
// ) {
//     console.log("Bolsa parcial");
// } else {
//     console.log("Sem bolsa");
// }

// // 27
// let usuario = "admin";
// let senha = "1234";
// let tentativas = 2;

// if (tentativas >= 3) {
//     console.log("Conta bloqueada");
// } else if (usuario === "admin" && senha === "1234") {
//     console.log("Login autorizado");
// } else {
//     console.log("Credenciais inválidas");
// }

// // 28

// let consumoKWh = 250;
// let tarifa = 0;

// if (consumoKWh < 0) {
//     console.log("Consumo inválido");
// } else {
//     if (consumoKWh <= 100) {
//         tarifa = 0.60;
//     } else if (consumoKWh <= 200) {
//         tarifa = 0.75;
//     } else {
//         tarifa = 0.90;
//     }

//     let conta = consumoKWh * tarifa;

//     console.log(`Valor da conta: R$ ${conta.toFixed(2)}`);
// }

// // 29

// let estoque = 12;
// let quantidade = 3;
// let precoUnitario = 80;
// let saldoCliente = 220;
// let clienteVIP = false;

// if (quantidade <= 0) {
//     console.log("Compra rejeitada: quantidade inválida");
// } else if (quantidade > estoque) {
//     console.log("Compra rejeitada: estoque insuficiente");
// } else {
//     let subtotal = quantidade * precoUnitario;
//     let valorFinal = subtotal;

//     if (clienteVIP) {
//         valorFinal = subtotal * 0.90;
//     }

//     if (saldoCliente >= valorFinal) {
//         estoque = estoque - quantidade;
//         saldoCliente = saldoCliente - valorFinal;

//         console.log("Compra autorizada");
//         console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
//         console.log(`Estoque restante: ${estoque}`);
//         console.log(`Saldo restante: R$ ${saldoCliente.toFixed(2)}`);
//     } else {
//         console.log("Compra rejeitada: saldo insuficiente");
//     }
// }

// // 30

// let idade = 17;
// let notaProva = 82;
// let frequencia = 88;
// let autorizacaoResponsavel = true;
// let possuiPendencia = false;

// if (idade < 14 || idade > 20) {
//     console.log("Inscrição recusada: idade fora da faixa");
// } else if (notaProva < 70) {
//     console.log("Inscrição recusada: nota insuficiente");
// } else if (frequencia < 80) {
//     console.log("Inscrição recusada: frequência insuficiente");
// } else if (possuiPendencia) {
//     console.log("Inscrição recusada: possui pendência");
// } else if (idade < 18 && !autorizacaoResponsavel) {
//     console.log("Inscrição recusada: falta autorização do responsável");
// } else {
//     console.log("Inscrição aprovada");
// }



    



