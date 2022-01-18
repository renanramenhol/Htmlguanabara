document.getElementById('valor-calculado').style.display = 'none';
document.getElementById('each').style.display = 'none';

function calcularGorjeta() {

var totalConta = document.getElementById('total-conta').value;
var taxaServiço = document.getElementById('taxa-serviço').value;
var numeroPessoas = document.getElementById('numero-pessoas').value;

    if (totalConta === "" || taxaServiço == 0 || isNaN(totalConta) || isNaN(numeroPessoas)) {
        alert('Digite um valor válido');
        return;
    }

    if (numeroPessoas === "" || numeroPessoas <= 1) {
        numeroPessoas = 1;
        document.getElementById('each').style.display = "none"
    }else {
        document.getElementById('each').style.display = "block"
    } 
    
    var totalTaxaServiço = (totalConta * taxaServiço) / numeroPessoas;
    var total = totalTaxaServiço + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById('valor-calculado').style.display = 'block';
    document.getElementById("valor-por-cabeca").innerHTML = total;

}

    document.getElementById('calcular').onclick = function() {
        calcularGorjeta();
    }