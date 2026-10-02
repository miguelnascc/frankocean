/*let numero1= Number(prompt("digite um numero"));

let antecessor= numero-1;

alert("o numero antecessor é:" + antecessor); */

/*let base = Number(prompt("Digite o valor da base do seu retângulo:"));

let altura = Number(prompt("Digite o valor da altura:"));

let area = base * altura;

alert("O resultado é:" + area);*/


/*let anos= Number(prompt("digite sua idade em anos:"));
let meses= Number (prompt("digite quantos meses:"));
let dias= Number(prompt("digite os dias:"));

let totaldias= (anos*365) + (meses * 30) + dias;

alert("você já viveu aproximadamente" + totaldias + "dias."); */


/*let metros= Number (prompt("Digite a quantidade em metros:"));
let centimetros= metros*100;

alert("o resultado é:" + centimetros)*/


/*let eleitores= Number(prompt("Digite o total de eleitores"));
let brancos= Number(prompt("Digite o total de brancos"));
let nulos= Number(prompt("Digite o total de nulos"));
let validos= Number(prompt("Digite o total de validos"));

let percentualbrancos= (brancos*100)/ eleitores;
let percentualnulos= (nulos*100)/ eleitores;
let percentualvalidos= (validos*100)/ eleitores;

alert("O percentual de votos brancos é:" + percentualbrancos + "%\n" + 
    "O percentual de votos nulos é" + percentualnulos + "%\n" +
    "O percentual de votos validos é" + percentualvalidos + "%\n"
); */


/*let custofabrica = Number(prompt("Digite o custo de fábrica de carro"));

let distribuidor= custofabrica * 0.28;
let imposto = custofabrica * 0.45;

let custofinal= custofabrica+distribuidor+imposto

alert("o custo final do consumidor é: R$" + custofinal )*/

/*let opção= Number(prompt("Digite uma opção"))

if(opção === 1) {
    alert("Você escolheu Batman");
} else if (opção === 2) {
    alert("você escolheu miranha")
} else if (opção === 3) {
    alert("Você escolheu thor ")
} else {
    alert ("opçãoinvalida")
} */

   /* let opcao = Number(prompt("Digite uma opção"));

switch (opcao) {

    case 1:
        alert("Você escolheu a opção um");
        break;

    case 2:
        alert("Você escolheu a opção dois");
        break
     
    case 3:
        alert("Você escolheu a opção 3");
        break
        
    default:
        alert("Opção inválida!!");
} */

        /*
        let nota1= Number(prompt("Digite a primeira nota"));
        let nota2= Number(prompt("Digite a segunda nota"));
        let nota3= Number(prompt("Digite a terceira nota"));
        let nota4= Number(prompt("Digite a quarta nota"));

        let media = ( nota1+ nota2+ nota3+ nota4) /4;

        if (media >=6) {
            alert ("Aprovado Média:" + media);
        } else if ( media == 5) {
            alert("Recuperação!:" + media);
        } else {
            alert("Reprovado" + media)
        } */
        
          /*  let opcao = Number(prompt
             ("Menu Coffe infinito\n\n" +
                "1- Realidade- 5,00 \n café preto forte, feito para te trazer de volta ao mundo" +
                "2- Espaço- 5,00\n achocolatado, com calda de floresta negra em cima" +
                "3- Alma- 5,00\n seu sabor preferido mas com um toque de expresso" +
                "4- sair" +
                "Escolha uma opção"
             ))
             switch (opcao){
                case 1:
                alert ("Realidade= 5,00");
                break

                case 2:
                alert("Espaço= 5,00");
                break

                case 3:
                alert("Alma= 5,00");
                break

                case 4:
                alert("Obrigado não");
                break
             } */

    
                /*for (let uva = 1; uva <= 100; uva++){ 
                    console.log("uva");
 }

 let contador = 1;

while (contador <= 5) {
    alert(contador);
    contador++;
}*/

/* let senha= (prompt("Digite sua senha"));
while (senha !=="12345"){
    alert ("Senha Incorreta")

    senha= prompt("Digite novamente");

} alert("Senha correta"); */


/* let numero;

do{
    numero= Number(prompt("Digite um numero maior dez:"));
} while ( numero <=10);

alert("numero valido!"); */

 /* for (let i = 10; i >= 1; i-- ){
    alert(i);
}
*/

for (let i = 0; i <= 20; i += 2){
    alert(i)
}

let contador= 1;
while(contador <=10){
    alert(contador);
    contador ++;
}

let numero= Number(prompt("Digite um numero positivo:"));
 while (quando <=0) {
    alert("numero invalido")

numero= Number (prompt("Digite novamente"));
 }
 alert("numero valido")