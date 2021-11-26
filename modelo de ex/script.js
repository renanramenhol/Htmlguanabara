function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.}`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagem/manha.jpg'
        document.body.style.backgroundColor = '#A5B7BF'
    } else if(hora >=12 && hora <18 ) {
        img.src = 'imagem/tarde.jpg'
        document.body.style.backgroundColor ='#CB5906'
    }else {
        img.src = 'imagem/noite.jpg'
        document.body.style.backgroundColor ='#132D34'
    }
}
