var llaves = ["enter", "imes", "ai", "ober", "ufat"];
var letras = ["e", "i", "a", "o", "u"];
var texto, cifrar, result;
var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?áéíóú0-9]/;

function encriptar(){
    
    texto = document.getElementById("text-area").value;    
    result = format.test(texto);
    
    if(texto != ""){
        if(!result){
            cifrar = texto.replaceAll(letras[0], llaves[0]).replaceAll(letras[1], llaves[1]).replaceAll(letras[2], llaves[2]).replaceAll(letras[3], llaves[3]).replaceAll(letras[4], llaves[4]);
        
            document.getElementById("mensaje").style.background = "white";
            document.getElementById("mensaje").innerHTML = cifrar;  
            document.getElementById("informacion").innerHTML = "";      
            document.getElementById("copiar").style.display = "block";  
            document.getElementById("warning").style.opacity = "0";   
            document.getElementById("check").style.opacity = "60%";
            document.getElementById("informacion").innerHTML = "Encriptar";             
        } else {
            document.getElementById("text-area").value = "";         
            
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
  
    texto = document.getElementById("mensaje").value;  
   
    if(texto != "" ){   // validar que el campo no este vacio    
        cifrar = texto.replaceAll(llaves[0], letras[0]).replaceAll(llaves[1], letras[1]).replaceAll(llaves[2], letras[2]).replaceAll(llaves[3], letras[3]).replaceAll(llaves[4], letras[4]);

        document.getElementById("informacion").innerHTML = "Descencriptar";  
        document.getElementById("mensaje").innerHTML = cifrar;        
    
    } else {        
        document.getElementById("informacion").innerHTML = "Ingrese el texto";
        document.getElementById("warning").style.opacity = "60%"
        document.getElementById("check").style.opacity = "0";
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
        // document.getElementById("mensaje").style.backgroundImage = `url(../img/muñeco2.png)`;  
       
        document.getElementById("informacion").innerHTML = "Texto copiado: " + texto.value;
        document.getElementById("check").style.opacity = "60%";
        document.getElementById("warning").style.opacity = "0"    
    } 
}

function refrescar(){
    location.reload();
}