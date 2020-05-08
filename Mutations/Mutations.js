document.getElementById("cambiar").innerHTML=mutation(["hello", "Hello"]);

function mutation(arr) {    //Definición de función
    let origen=arr[0].toLowerCase().split("");  //Definición de variable con asignación de el primer elemento del arr original, en minusculas (toLowerCase), y letra por letra (split())
    let comparacion=arr[1].toLowerCase().split(""); //Definición de variable con asignación de el segundo elemento del arr original, en minusculas (toLowerCase), y letra por letra (split())
    let validacion=[];  //Definición de variable a la cual se iran pusheando si el string de "comparación" se encuentra en "origen"
    for (let i=0;i<comparacion.length;i++){  //Recorremos la matriz comparación
        if (origen.indexOf(comparacion[i])!= -1){   //Evalua si el elemento "i" de comparación se encuentra en "origen"
            validacion.push(true);  //Pushea "true" a la matriz validación
        }
        else{   //Si el elemento "i" no se encuentra en la matriz "origen"
            validacion.push(false); //Pushea "false" a la matriz de validación
        }
    }
    for (let i=0;i<validacion.length;i++){  //Recorremos el elemento validación
        if (validacion[i]===false){ //Evalúa si alguno de los valores es "falso"
            return false;   //Retorna "falso" como callback de la función
        }
    }
    return true;    //Si no se da que alguno de los elementos es "falso", y no se comprobo q este erroneo ningun dato, retornara "true".
}