document.getElementById("cambiar").innerHTML=getIndexToIns([10, 20, 30, 40, 50], 30);

function getIndexToIns(arr, num) {  //Declaración de función
    let arrOrdenada=[]; //Definición de Matriz de trabajo intermedio
    if (arr.length===0){    //Evalúa si la arr esta vacía
        return 0;   //Si la arr esta vacía, el nuevo índice será 0 (el unico elemento de hecho)
    }
    arrOrdenada=arr.sort(comparar); //Ordena la matriz con el método Sort (usa como argumento de comparación la función comparar)
    for (let i=0;i<arr.length;i++){ //Recorre la matriz
        if (arr[i]>=num){   //Cuando el valor de la matriz q se esta recorriendo sea igual o mayor al número que se busca
            return i;   //Devuelve el índice de la matriz en la que se está
        }
    }
    return arr.length;  //Si al recorrer la matriz no se devolvió ningun valor de índice, significa q el número va al final, por lo tanto se devuelve la longitud de la matriz (por su índice)
}


function comparar(n1,n2){   //Definición de función para devolver argumentos a el método Sort (para ordenar en base numerica y no Unicode)
    if (n1 < n2){   //si el primer número es menor, devuelve -1
        return -1;  
    }
    if (n1 > n2){   //si el primer número es mayor, devuelve 1
        return 1;
    }
    if (n1 === n2){ //si son iguales devuelve 0
        return 0;
    }
}