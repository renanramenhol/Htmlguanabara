let num = [5,8,2,9,3]
num.push(1) // para adicionar um valor
num.sort()   // para alinhar 
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos =num.indexOf(7)
if(pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}