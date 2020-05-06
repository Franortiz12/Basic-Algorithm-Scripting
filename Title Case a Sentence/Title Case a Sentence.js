document.getElementById("cambiar").innerHTML=titleCase("I'm A Little Tea Pot");

function titleCase(str) {
    let palabras=[];    //Definición de matriz de trabajo
    let final="";   //String Final para usar el return
    palabras=str.split(" ");    //Separo la oración en palabras
    for (let i=0;i<palabras.length;i++){    //Recorro la matriz (las diferentes palabras)
        palabras[i]=palabras[i].toLowerCase();  //Transformo en minuscula
        palabras[i]=palabras[i][0].toUpperCase()+ palabras[i].slice(1); //Transformo en mayuscula solo primer letra
        if (i==palabras.length-1){  //Evaluo si es la ultima palabra o no
            final+=palabras[i]; //True=Es la ultima palabra, por lo tanto va la palabra sola
        }
        else{
            final+=palabras[i]+" "; //False=No es la ultima palabra, por lo tanto va la palabra + un espacio
        }
    }
    
    return final;   //Devuelve las palabras unidas en un str con primera letra en Mayuscula
}

