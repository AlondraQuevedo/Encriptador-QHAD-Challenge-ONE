var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedor-muneco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

//Funcion que llama otras funciones para encriptar mensaje
//oculta el frente y muestra lo de atras con texto encriptado
function encriptar(){
    ocultarFrente();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

//Funcion que llama para desencriptar y mostrar mensaje
function desencriptar(){
    ocultarFrente();
    resultado.textContent =desencriptarTexto(recuperarTexto());
}

//lleva el texto ingresado en seccion1 a la seccion2
function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

//oculta el frente de inicio
function ocultarFrente(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

//encripta el mensaje
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}


//desencripta el mensaje
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            //ai
            i++;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            //enter
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            //imes
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            //ober
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            //ufat
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

//COPIAR
function copiar(){
    //resultado.select();//selecciona todo
    navigator.clipboard.writeText(resultado.value)
    .then(() =>alert("Texto copiado"))
    //copia mensaje
}
