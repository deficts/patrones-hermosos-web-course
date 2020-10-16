function generarHora(){
    var now = new Date()
    var h = now.getHours()
    var m = now.getMinutes()
    var s = now.getSeconds()
    m = agregarCeros(m)
    s = agregarCeros(s)
    //Buscar nuestro reloj en nuestro html
    document.getElementById("reloj").innerText = h + ':' + m + ':' + s
    var t = setTimeout(generarHora, 500);
}

function agregarCeros(tiempo){
    if(tiempo < 10){
        tiempo = "0"+tiempo
    }
    return tiempo
}

function revisarQuiz(){
    let count = 0

    var edadElement = document.getElementById("edad")
    var edad = edadElement.options[edadElement.selectedIndex].value
    
    var comidaElement = document.getElementById("comida")
    var comida = comidaElement.options[comidaElement.selectedIndex].value

    var lenguajeElement = document.getElementById("lenguaje")
    var lenguaje = lenguajeElement.options[lenguajeElement.selectedIndex].value

    if(edad === "20"){
        count++
    }

    if(comida === "Tacos"){
        count++
    }

    if(lenguaje === "JavaScript"){
        count++
    }

    alert("Tuviste: " + count + "/3 respuestas correctas.")
}

generarHora()