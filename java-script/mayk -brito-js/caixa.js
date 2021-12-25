
let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00],
}

function sum(array) {
    let total = 0;

    
    for(let value of array) {
        total += value
    }
    return total
}

function calculoBalanço(){
    const calculoEntrada = sum(family.incomes)
    const calculoSaida = sum(family.expenses)

    const total = calculoEntrada - calculoSaida

    const itsOk = total >= 0

    let balanço = "negativo"

    if(itsOk) {
        balanço = "positivo"
    }

    console.log(`Seu saldo é ${balanço}:  ${total.toFixed(2)} R$`)
}

calculoBalanço()