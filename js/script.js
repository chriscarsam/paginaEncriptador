const llaves = ["enter", "imes", "ai", "ober", "ufat"];
const letras = ["e", "i", "a", "o", "u"];
const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóú0-9]/;    //format contiene una expresión recular para validar los caracteres especiales y números.

let texto, texto2, cifrar, result;

// Selección de elementos.
let mensaje =  document.getElementById("mensaje");
let textArea = document.getElementById("text-area");
let informacion = document.getElementById("informacion");
let btnCopiar = document.getElementById("copiar");
let warning = document.getElementById("warning");
let check = document.getElementById("check");


function encriptar() {    
    
    texto = textArea.value;
    result = format.test(texto); //Verifica que el texto contenga caracteres especiales o números, retorna un booleano True o False.

    if (texto != "") { // Validar que el campo no este vacío.
        if (!result) { // Válida si la variable es (False) para continuar con el cifrado

            cifrar = texto.replaceAll(letras[0], llaves[0]).replaceAll(letras[1], llaves[1]).replaceAll(letras[2], llaves[2]).replaceAll(letras[3], llaves[3]).replaceAll(letras[4], llaves[4]);    //cifrar encripta el texto ingresado

            mensaje.style.background = "white";      //textarea (mensaje) se asigna el color blanco.
            mensaje.innerHTML = cifrar;              // Se asigna los datos cifrados al texarea (mensaje) para que se muestren.
            
            btnCopiar.style.display = "block";        // Aparece el botón copiar
            warning.style.opacity = "0";             // Se asigna la opacidad 0 a la imagen warning.
            check.style.opacity = "60%";             // Se asigna la opacidad 60% a la imagen check.
            informacion.innerHTML = "Encriptar";

        } else {

            textArea.value = "";                     // Se limpia el text-area
            informacion.innerHTML = "Solo letras minúsculas y sin acentos";
            warning.style.opacity = "100%"
            check.style.opacity = "0";

        }

    } else {

        informacion.innerHTML = "Ingrese el texto";
        warning.style.opacity = "40%";
        check.style.opacity = "0";

    }

}

function desencriptar() {

    texto2 = textArea.value;
    texto = mensaje.value;
    result = format.test(texto2);

    if (texto2 != "" && !result) {
        if (texto2.includes(llaves[0]) || texto2.includes(llaves[1]) || texto2.includes(llaves[2]) || texto2.includes(llaves[3]) || texto2.includes(llaves[4])) {

            mensaje.style.background = "white";
            informacion.innerHTML = "Ingrese el texto";
            btnCopiar.style.display = "block";
            texto = texto2;

        } else {
            textArea.value = "";
        }
    }

    if (texto != "") {   // Validar que el campo no este vacío.       
        if (!result) {
            cifrar = texto.replaceAll(llaves[0], letras[0]).replaceAll(llaves[1], letras[1]).replaceAll(llaves[2], letras[2]).replaceAll(llaves[3], letras[3]).replaceAll(llaves[4], letras[4]); //cifrar, desencripta el texto ingresado.

            informacion.innerHTML = "Descencriptar";
            mensaje.innerHTML = cifrar;

        } else {

            textArea.value = "";            // Se limpia el text-area
            informacion.innerHTML = "Solo letras minúsculas y sin acentos";
            warning.style.opacity = "100%"
            check.style.opacity = "0";

        }

    } else {

        informacion.innerHTML = "Solo letras minúsculas y sin acentos";
        warning.style.opacity = "60%"
        check.style.opacity = "0";
        textArea.value = "";
    }
}


function copiar() {

    texto2 = mensaje.value;
    texto = mensaje;

    if (texto2 != "") {

        texto.select();
        texto.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(texto.value);

        textArea.value = "";
        informacion.innerHTML = "Copiar:  " + (texto.value).substr(0, 60) + " ...";
        check.style.opacity = "60%";
        warning.style.opacity = "0"

    }

}

function refrescar() {
    location.reload(); //Refresca la página web
}