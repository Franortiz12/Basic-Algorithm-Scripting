document.getElementById("cambiar").innerHTML=bouncer([7, "ate", "", false, 9]);

function bouncer(arr) { //Definición de función
    let arrFinal=[];    //Definición de Matriz para devolver
    for (let i=0;i<arr.length;i++){ //Bucle para recorrer los elementos de la matriz
        if (arr[i]){    //Detecta los valores que son válidos
            arrFinal.push(arr[i]);  //Pushea valores validos en la matriz final
        }
    }
    return arrFinal;    //Retorna matriz final
}
