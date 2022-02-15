let lista = [];


// do {
//     const valorDigitado = prompt('Digite um valor');
//     lista.push(valorDigitado);
// } while (lista.length < 5)


// while (lista.length < 5) {
//     const valorDigitado = prompt('Digite um valor');
//     lista.push(valorDigitado);
// }

for (let i = 1; i <= 5; i++){
    const valorDigitado = prompt('Digite um valor');
    lista.push(parseInt(valorDigitado));
}

const valorMaximo = getValorMaximo();

console.log(lista);
console.log(valorMaximo);

function getValorMaximo(){
    let valorMaximo = 0;

    for(let i = 0; i < lista.length; i++){
        if(valorMaximo < lista[i]){
            valorMaximo = lista[i];
        }
    }

    return valorMaximo;
}

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