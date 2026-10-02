Algoritmo "SalarioMensal"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 24/08/2026
Var
// Seção de Declarações das variáveis 
        salarioHora: real
        horasTrabalhadas: real
        salarioTotal: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
       escreval("Digite quanto você ganha por hora: ")
       leia(salarioHora)
       
       escreva("Digite quantas horas você trabalhou no mês: ")
       leia(horasTrabalhadas)
       
       salarioTotal <- salarioHora * horasTrabalhadas
       escreval("Seu salário no mês é: R$ ", salarioTotal:0:2)

Fimalgoritmo