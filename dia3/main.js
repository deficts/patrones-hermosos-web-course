function generarHora(){
    var now = new Date()
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    m = agregarCeros(m)
    s = agregarCeros(s)
    //Buscar nuestro reloj en nuestro html
    document.getElementById("reloj").innerText = h + ':' + m + ':' + s
    console.log(h + ' : ' + m + ' : ' + s)
    var t = setTimeout(generarHora, 500);
}

function agregarCeros(tiempo){
    if(tiempo < 10){
        tiempo = "0"+tiempo
    }
    return tiempo
}

generarHora()