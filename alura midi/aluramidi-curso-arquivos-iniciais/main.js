function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;



const ListaDeTeclas = document.querySelectorAll('.tecla');

    while (contador < ListaDeTeclas.length) {
        ListaDeTeclas[contador].onclick = tocaSomPom;

        contador = contador + 1;
    }
   
