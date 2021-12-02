
const calcular =document.getElementById('calcular')


function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado =document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if(valorIMC < 18,5) {
            classificacao = 'Abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'Peso normal'
        } else if (valorIMC < 30) {
            classificacao = 'Acima do Peso'
        }else {
            classificacao = 'Obeso'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os Campos!!!'
    }
}

calcular.addEventListener('click', imc)