var bEncriptar = document.querySelector("#botonEncriptar");
var bDesencriptar = document.querySelector("#botonDesencriptar");
var imagen = document.querySelector(".imagenseccion2");
var h4 = document.querySelector(".mensajenoEncontrado");
var parrafo = document.querySelector(".parrafoingresetexto");
var resultado = document.querySelector(".textoResultado");
var bCopiar = document.querySelector("#botonCopiar");

bEncriptar.onclick = encriptar;
bDesencriptar.onclick = desencriptar;
bCopiar.onclick = copiar; 

function encriptar(){
    ocultarSeccion();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function desencriptar (){
    ocultarSeccion();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto(){
    var textarea = document.querySelector(".text-area");
    return textarea.value;
}

function ocultarSeccion(){
    imagen.classList.add("ocultar");
    h4.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
        }
        return stringEncriptado;
}

function desencriptarTexto(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        }
        return stringDesencriptado;
}

function copiar(){
    ocultarSeccion();
    var texto = document.querySelector(".textoResultado");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

var textarea = document.querySelector(".text-area");
textarea.addEventListener("input", function () {
    var textoValido = validarCaracteresEspeciales(this.value);
    this.value = textoValido;
});

function validarCaracteresEspeciales(texto) {
    var regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("Se encontraron caracteres especiales. Por favor, ingrese solo letras minúsculas y espacios.");
        return "";
    } else {
        return texto;
    }
}