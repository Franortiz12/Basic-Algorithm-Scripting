document.getElementById("cambiar").innerHTML=frankenSplice([1, 2], ["a", "b"], 1);

function frankenSplice(arr1, arr2, n) {
    let arrFinal=[];    //Definición de matriz que se devuelve
    for (let i=0;i<arr2.length;i++){    //Recorremos La segunda matriz
        arrFinal.push(arr2[i]); //Agregamos cada uno de los elementos de la matriz 2 al final de la matriz final
    }
    for (let i=0;i<arr1.length;i++){    //Recorremos la matriz 1
        arrFinal.splice(n+i,0,arr1[i]);   //Utilizamos Splice para agregar en el indice adecuado los elementos de la primer matriz
    }
    return arrFinal; //Retornamos la Matriz Final, según consigna
    
}
