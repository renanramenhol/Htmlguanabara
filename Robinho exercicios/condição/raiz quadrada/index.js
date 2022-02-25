



distanciaEntrePontos(x1, y1, x2, y2);


function distanciaEntrePontos(x1, y1, x2, y2) {
    let d;
    let primeiraSubtracao;
    let primeiraPotencia;
    let segundaSubtracao;
    let segundaPotencia;
    let soma;
    let raiz;

    primeiraSubtracao = x2 - x1;
    primeiraPotencia = primeiraSubtracao ** 2;

    segundaSubtracao = y2 - y1;
    segundaPotencia = segundaSubtracao ** 2;

    soma = primeiraPotencia + segundaPotencia;

    raiz = Math.sqrt(soma);

    d = raiz;

}

let valx1 = document.getElementById('valorx1').value;

let valx2 = document.getElementById('valorx2').value;

let valy1 = document.getElementById('valory1').value;

let valy2 = document.getElementById('valory2').value;



document.getElementById().onclick = function () {
    distanciaEntrePontos();
}

document.getElementById("resposta").innerHTML = d;

  let renan = 2*(3+10/5*5)-1;
  console.log(renan)

