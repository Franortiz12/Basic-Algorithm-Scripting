document.getElementById("cambiar").innerHTML=getIndexToIns([10, 20, 30, 40, 50], 30);

function getIndexToIns(arr, num) {
    let arrOrdenada=[];
    let indice=0;
    arrOrdenada=ordenar(arr);
    for (let i=0;i<arr.length;i++){
        if (i!=0){
            if (arr[i]>num){
                indice=i-1;
            }
        }
        else{
            if (arr[i]>num){
                indice=i;
            }
        }
    }
    return indice;
}


function ordenar (arr){
    let arrOrdenada=[];
    
    return arrOrdenada;
}
