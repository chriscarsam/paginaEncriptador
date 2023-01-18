var llaves = ["enter", "imes", "ai", "ober", "ufat"];
var letras = ["e", "i", "a", "o", "u"];
var texto, cifrar, result;
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóú0-9]/;


function validar(texto){    
        result = format.test(texto);          
        
        if(result){
            document.getElementById("text-area").value = "";                            
        } 

}


function encriptar(){
    
    texto = document.getElementById("text-area").value;    
    result = format.test(texto);
    
    if(texto != ""){
        if(!result){
            cifrar = texto.replaceAll(letras[0], llaves[0]).replaceAll(letras[1], llaves[1]).replaceAll(letras[2], llaves[2]).replaceAll(letras[3], llaves[3]).replaceAll(letras[4], llaves[4]);
        
            document.getElementById("mensaje").style.background = "white";
            document.getElementById("mensaje").innerHTML = cifrar;    
            document.getElementById("informacion").style.display = "none";  
        } else {
            document.getElementById("text-area").value = "";         
            document.getElementById("informacion").style.display = "contents";           
        }

    } else {
        alert("Ingresa un texto");
    }
}

function desencriptar(){
  
    texto = document.getElementById("mensaje").value;  
   
    if(texto != "" ){   // validar que el campo no este vacio    
        cifrar = texto.replaceAll(llaves[0], letras[0]).replaceAll(llaves[1], letras[1]).replaceAll(llaves[2], letras[2]).replaceAll(llaves[3], letras[3]).replaceAll(llaves[4], letras[4]);

        document.getElementById("mensaje").innerHTML = cifrar;
    
    } else {
        alert("Ingresa un texto");
    }
}


function copiar(){
    texto2 = document.getElementById("mensaje").value; 
    texto = document.getElementById("mensaje");

    if(texto2 != ""){
        texto.select();
        texto.setSelectionRange(0, 99999);
    
        navigator.clipboard.writeText(texto.value);
        document.getElementById("text-area").value = ""; //Vaciar texto-area luego de copiar el texto
    
        alert("Texto copiado: " + texto.value);
    } else {
        alert("No existe texto a copiar.");
    }
}