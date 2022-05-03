function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const ListaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < ListaDeTeclas.length) {
  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter")
      tecla.classList.add("ativa");
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}

/* 
        

    for (let contador = 0;contador < ListaDeTeclas.length; contador++) {

        const tecla = ListaDeTeclas[contador];
        const instrumento = tecla.classList[1];

        const idAudio = `#som_${instrumento}`;

        tecla.onclick = function () {
            tocaSom(idAudio);
        }

        
    }

    */
