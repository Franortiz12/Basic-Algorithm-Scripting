document.getElementById("cambiar").innerHTML=chunkArrayInGroups(["a", "b", "c", "d"], 2);


function chunkArrayInGroups(arr, size) {    //Definición de función
    let arrFinal=[];    //Definición de matriz de trabajo
        
    for (let i=0;i<arr.length;i){ //Se recorre la matriz de origen (que se va reduciendo) hasta q no queden elementos. No cambia i en ningun momento
        arrFinal.push(arr.splice(0,size));  //Se pushea en la matriz final, tantos elementos recortados de la matriz original como indica "size"
    }
    return arrFinal;    //Se retorna la matriz de trabajo final.
}
