//Cambia el atributo src de Imagen de C.V.

document.getElementById('boton1').onclick = function(){
    document.getElementById('miImag').src = "images/fotoModif.png";
    console.log("document.getElementById('miImag').src");
}


document.getElementById('boton2').onclick = function () {
    document.getElementById('miImag').src = "images/foto.png";
    console.log("document.getElementById('miImag').src");
}

