

    const sum = function(number1, number2){
        console.log(number1 + number2)
    }

let number11 =34
let number22 = 25

sum(number11, number22)

function fazerSuco(fruta1, fruta2){
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana','maça')

console.log(copo)

const myName = (name) => {
    console.log(name)
}
myName('Renan')

let number = 345.36643838
console.log(number.toFixed(2).replace(".",","))

// toLowerCase() // deixar as letras pequenas

// toUpperCase() // deixar as letras grandes


 let temperatura = 36

 if (temperatura >= 37.5) {
     console.log('Febre alta')
 } else if(temperatura < 37.5 && temperatura >= 37) {
    console.log('Febre Moderada')
 } else {
     console.log('Saudável')
 }