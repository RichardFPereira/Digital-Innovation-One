Anotações de aula JavaScript do bootcamp DIO

Boas práticas:
1º Externar o script. (arquivo script.js)
2º Carregar o script ao final do body. (para evitar que a página realize iterações e demore para carregar conteúdo)
3º Comentar o código. (Para comentar um código em HTML, utilizar a estrutura: <!-- 'Meu Comentário' -->)
4º Declare as variáveis no topo do bloco de código

Tipagem: No JavaScript a tipagem é fraca, ou seja, ele detecta o tipo da variável sem a necessidade de dizer qual é o tipo.

Declaração de variáveis: 
    - Iniciar com letras, underscore ou cifrão. Não deve iniciar com números.

    - Não usar espaços. (procure usar camelCase ou _)
        * Exemplo: var minhaVariavel = true;
                   var minha_variavel = true; 
    
    - Não utilize palavras reservadas da linguagem como: function, var, let, etc.

Atribuição, comparação e comparação idêntica:
    //Atribui o valor da variável x para a variável y
    Atribuição: var x = 0;
                var y = x;

    //Compara o valor de '0' com 0 e retorna o valor true para a variável comparacao
    Comparação: var comparacao = '0' == 0;

    //Compara o valor e o tipo entre '0' e 0 retornando o valor falso para a variável comparacaoIdentica
    //pois o valor é igual, mas '0' é do tipo string e 0 é do tipo number
    Comparação idêntica: var comparacaoIdentica = '0' === 0;

Operadores:
    -Adição: var x = 1 + 1;
    -Subtração: var y = 1 - 1;
    -Multiplicação: var x = 2 * 2;
    -Divisão real: var y = 2 / 2;
    -Divisão inteira: var y = 2 % 2;
    -Potenciação: var z = 2 ** 10;

