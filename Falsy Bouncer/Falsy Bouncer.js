document.getElementById("cambiar").innerHTML=bouncer([7, "ate", "", false, 9]);

function bouncer(arr) {
    let arrFinal=[];
    for (let i=0;i<arr.length;i++){
        if (arr[i]){
            arrFinal.push(arr[i]);
        }
    }
    return arrFinal;
}
