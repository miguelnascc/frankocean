Algoritmo "numerodeeleitores"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Nicolas Daniel Euflauzino
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Miguel Cesario do Nascimento
// Data atual  : 25/08/2026
Var
// Seção de Declarações das variáveis 
    totaleleitores, nulos, brancos, validos:inteiro
    percentualbrancos, percentualnulos, percentualvalidos: real
    
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     Escreval("Digite o total de eleitores")
     leia(totaleleitores)
     
     Escreval("Digite o total de votos nulos")
     Leia(nulos)
     
     Escreval("Digite o total de votos brancos")
     Leia(brancos)
     
     Escreval("Digite o total de votos validos")
     Leia(validos)
     
     percentualnulos<- (nulos * 100 )  /totaleleitores
     percentualbrancos<- (brancos * 100 )  /totaleleitores
     percentualvalidos<- (validos * 100 )    /totaleleitores
     
     Escreval("Percentual de votos nulos:" , percentualnulos, "%")
     Escreval("Percentual de votos brancos:" , percentualbrancos,  "%")
     Escreval("Percentual de votos validos:" , percentualvalidos, "%")

Fimalgoritmo