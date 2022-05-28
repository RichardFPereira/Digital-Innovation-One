//Tipos primitivos

//  Boolean
var VouF = false;
//imprime o valor de VouF
console.log(VouF);
//imprime o tipo da variável
console.log(typeof(VouF));

//  number
var numero = 1;
console.log(typeof(numero));

//  string
var nome = 'Richard';
console.log(typeof(nome));

//  undefined
var variavel;
console.log(variavel);

//  let - por convesão utilizado em scopo local
let variavel2 = 'Richard';

// const - Valor constante, não pode ser alterado e deve ser inicializado
const constante = 0;

//escopo local e global - Somente a variável escopoGlobal será printada
//a variável 'varEscopoLocal' não será pois está sendo declarada localmente na função escopoLocal()
var escopoGlobal = 'Global';
console.log(escopoGlobal);
console.log(varEscopoLocal);

//Quando a função for chamada, irá printar o valor da 'varEscopoLocal' pois a função console.log está
//dentro do bloco da função onde a variável foi declarada
function escopoLocal () {
    let varEscopoLocal = 'Local';
    console.log(varEscopoLocal);
}

function escopoLocal ()