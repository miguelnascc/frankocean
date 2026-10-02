Algoritmo "Cotação do dolar"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Nicolas Daniel Euflauzino
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Miguel Cesario
// Data atual  : 21/08/2026
Var
// Seção de Declarações das variáveis 
    cotacaodolar: real
    reais: real
    dolar: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      Escreval("Olá! Digite a atual cotação do dolar")
      Leia(cotacaodolar)
      
      Escreval("Digite quantos reais pretende converter")
      Leia(reais)
      
      dolar<- reais/cotacaodolar
      Escreval("O resultado é: $", dolar)

Fimalgoritmo