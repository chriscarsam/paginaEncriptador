var llaves = ["enter", "imes", "ai", "ober", "ufat"];           
var letras = ["e", "i", "a", "o", "u"];
var texto, texto2, cifrar, result;
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóú0-9]/;    //format contiene una expresión recular para validar los caracteres especiales y números.

function encriptar(){
    
    texto = document.getElementById("text-area").value;    
    result = format.test(texto); //Verifica que el texto contenga caracteres especiales o números, retorna un booleano True o False.
    
    if(texto != ""){ // Validar que el campo no este vacío.
        if(!result){ // Válida si la variable es (False) para continuar con el cifrado

            cifrar = texto.replaceAll(letras[0], llaves[0]).replaceAll(letras[1], llaves[1]).replaceAll(letras[2], llaves[2]).replaceAll(letras[3], llaves[3]).replaceAll(letras[4], llaves[4]); //cifrar encripta el texto ingresado
        
            document.getElementById("mensaje").style.background = "white";      //textarea (mensaje) se asigna el color blanco.
            document.getElementById("mensaje").innerHTML = cifrar;              // Se asigna los datos cifrados al texarea (mensaje) para que se muestren.
            document.getElementById("informacion").innerHTML = "";              // Se limpia el mensaje información
            document.getElementById("copiar").style.display = "block";          // Aparece el botón copiar
            document.getElementById("warning").style.opacity = "0";             // Se asigna la opacidad 0 a la imagen warning.
            document.getElementById("check").style.opacity = "60%";             // Se asigna la opacidad 60% a la imagen check.
            document.getElementById("informacion").innerHTML = "Encriptar";

        } else {

            document.getElementById("text-area").value = "";            // Se limpia el text-area
            document.getElementById("informacion").innerHTML = "Solo letras minúsculas y sin acentos"; 
            document.getElementById("warning").style.opacity = "100%"     
            document.getElementById("check").style.opacity = "0";       

        }

    } else {       

        document.getElementById("informacion").innerHTML = "Ingrese el texto";  
        document.getElementById("warning").style.opacity = "40%";
        document.getElementById("check").style.opacity = "0";

    }

}

function desencriptar(){
  
    texto2 = document.getElementById("text-area").value;
    texto = document.getElementById("mensaje").value;  
    result = format.test(texto2);
    
    if(texto2 != "" && !result ){
        if(texto2.includes(llaves[0]) || texto2.includes(llaves[1]) || texto2.includes(llaves[2]) || texto2.includes(llaves[3]) || texto2.includes(llaves[4])){
            document.getElementById("mensaje").style.background = "white";
            document.getElementById("informacion").innerHTML = "Ingrese el texto";
            document.getElementById("copiar").style.display = "block"; 
            texto = texto2;
            console.log("texto2")
        } else {
            document.getElementById("text-area").value = "";             
        }
    }
   
    if(texto != ""){   // Validar que el campo no este vacío.       
        if(!result){             
            cifrar = texto.replaceAll(llaves[0], letras[0]).replaceAll(llaves[1], letras[1]).replaceAll(llaves[2], letras[2]).replaceAll(llaves[3], letras[3]).replaceAll(llaves[4], letras[4]); //cifrar, desencripta el texto ingresado.
    
            document.getElementById("informacion").innerHTML = "Descencriptar";  
            document.getElementById("mensaje").innerHTML = cifrar;
            console.log("texto desencripta");

          } else {

            document.getElementById("text-area").value = "";            // Se limpia el text-area
            document.getElementById("informacion").innerHTML = "Solo letras minúsculas y sin acentos"; 
            document.getElementById("warning").style.opacity = "100%"     
            document.getElementById("check").style.opacity = "0";       

        }
    
    } else {   

        document.getElementById("informacion").innerHTML = "Solo letras minúsculas y sin acentos";
        document.getElementById("warning").style.opacity = "60%"
        document.getElementById("check").style.opacity = "0";
        document.getElementById("text-area").value = "";         
    }
}


function copiar(){

    texto2 = document.getElementById("mensaje").value; 
    texto = document.getElementById("mensaje");

    if(texto2 != ""){

        texto.select();
        texto.setSelectionRange(0, 99999);    
        navigator.clipboard.writeText(texto.value);

        document.getElementById("text-area").value = "";      
        document.getElementById("informacion").innerHTML = "Texto copiado: " + texto.value;
        document.getElementById("check").style.opacity = "60%";
        document.getElementById("warning").style.opacity = "0"  
          
    } 

}

function refrescar(){
    location.reload(); //Refresca la página web
}