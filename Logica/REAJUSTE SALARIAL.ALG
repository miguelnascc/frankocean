Algoritmo "Reajuste salarial"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Nicolas Daniel Euflauzino
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Miguel Cesario do Nascimento
// Data atual  : 25/08/2026
Var
// Seção de Declarações das variáveis 
    salario, percentual, novoSalario: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       Escreval("Digite o seu salario mensal atual")
       leia(salario)
       
       Escreval("Escreva o percentual de reajuste")
       leia(percentual)
       
       novosalario<- salario + (salario * percentual / 100)
       escreval("O novo salario e: R$ ", novoSalario:0:2)

Fimalgoritmo