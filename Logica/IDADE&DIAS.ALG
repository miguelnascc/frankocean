Algoritmo "Idade&dias"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Nicolas Daniel Euflauzino
// Descrição   : Aqui você vai ver quanto tempo viveu...
// Autor(a)    : Miguel Cesario do Nascimento
// Data atual  : 24/08/2026
Var
// Seção de Declarações das variáveis 
       anos: inteiro
       meses: inteiro
       dias: inteiro
       totaldias: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      Escreval ("Digite sua idade em anos:")
      leia (anos)
      
      Escreval("digite os meses")
      leia(meses)
      
      Escreval ("digite os dias")
      leia(dias)
      
      totaldias<- (anos*365) + (meses*30) + dias
      escreval ("você já sobre(viveu)" , totaldias, "dias.")

Fimalgoritmo