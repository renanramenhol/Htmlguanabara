let lista = [];


// do {
//     const valorDigitado = prompt('Digite um valor');
//     lista.push(valorDigitado);
// } while (lista.length < 5)


// while (lista.length < 5) {
//     const valorDigitado = prompt('Digite um valor');
//     lista.push(valorDigitado);
// }

for (let i = 1; i <= 5; i++) {
    const valorDigitado = prompt('Digite um valor');
    lista.push(parseInt(valorDigitado));
}

const valorMaximo = getValorMaximo();
const valorMinimo = getValorMinimo();


console.log(`Os números da lista são: ${lista}`);
console.log(`O maior valor encontrado é ${valorMaximo}`);
console.log(`O menor valor encontrado é ${valorMinimo}`);


function getValorMaximo() {
    let valorMaximo = 0;

    for (let i = 0; i < lista.length; i++) {
        if (valorMaximo < lista[i]) {
            valorMaximo = lista[i];
        }
    }

    return valorMaximo;
}

function getValorMinimo() {
    const valorMinimo = Math.min(...lista);
    return valorMinimo;

}


    let soma = 0;
    for (let i =0; i < lista.length; i++) {
        soma += lista[i]
        media = soma/lista.length
    }

    console.log(`A soma  dos valores encontrados são ${soma}`);
    console.log(`A media  dos valores encontrados são ${media}`);




// function getValorMaximo(){
//     Array.max = function(array) {
//         return Math.max.apply(Math, array);
//     }

//     return Array.max(lista);
// }
// function getValorMaximo(){
//     const valorMaximo = Math.max(...lista);
//     return valorMaximo;
// }
// function getValorMaximo(){
//     const max = lista.reduce(function(a, b) {
//         return Math.max(a, b);
//     });

//     return max;
// }