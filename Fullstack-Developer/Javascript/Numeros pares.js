//Declara função para retornar os números pares dentro de uma lista
function returnEvenValeues(array) {

    //Cria o uma array para receber os números pares da lista
    let evenNums = [];

    //Loop que faz a varredura na array
    for(let i = 0; i < array.length; i++)
    {        
        //Verifica se o resto da divisão entre o número atual por 2 é igual a zero
        //caracterizando o número como par
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        //Caso não seja par, imprime "não é par"
        else
        {
            console.log(`${array[i]} não é par!`);
        }
    }

    //Imprime todos os números pares encontrados na array
    console.log('Os números pares são:',evenNums);
}

//Lista de números
let array = [1, 2, 4, 5, 7, 8];

//Chama a função que verifica se o número é par ou ímpar para a lista 'array'
returnEvenValeues(array);