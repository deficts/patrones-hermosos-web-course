// Objeto Date
var now = new Date()
var h = now.getHours()
var m = now.getMinutes()
var s = now.getSeconds()

// Manejo de tipos de datos mutables
var hora_actual = "Hora actual son las: " + h + ":" + m + "." + s
console.log(hora_actual)

var hora_rara = "Hora rara: " + 10000 + h + ":" + m + "." + s
console.log(hora_rara)

// Control de flujo
if(h < 10){
	h = "0" + h
}

if(m < 10){
	m = "0" + m
}

if(s < 10){
	s = "0" + s
}

var hora_actual_tuneada = "Hora actual tuneada : " + h + ":" + m + "." + s
console.log(hora_actual_tuneada)

/* Concepto de funciones
	- Funciones Void
  - Funciones que retornan algun objeto
*/
function agregarCeros(tiempo){
    if(tiempo < 10){
        tiempo = "0"+tiempo
    }
    return tiempo
}

var hora_actual_tuneada_con_funciones = "Hora actual tuneada con funciones : " + agregarCeros(h) + ":" + agregarCeros(m) + "." + agregarCeros(s)

console.log(hora_actual_tuneada_con_funciones)


function tunear_hora(){
  if(h < 10){
    h = "0" + h
  }

  if(m < 10){
    m = "0" + m
  }

  if(s < 10){
    s = "0" + s
  }
}

tunear_hora()
var hora_actual_tuneada = "Hora tuneada con funcion: " + h + ":" + m + "." + s
console.log(hora_actual_tuneada)

// Agregar contenido de HTML dia_3.js

// Generar una aleta
// Ayudaran para visualizar los cambios de las funciones, en consola
// y en el sitio web
alert("Alerta chida")

var texto_chido = document.getElementById("id_del_texto_chido")
var texto = "El texto de la pagina es: '" + texto_chido.textContent + "' "
console.log(texto)

// Mas info de la funcion de getElementById
// https://developer.mozilla.org/es/docs/Web/API/Document/getElementById

texto_chido.textContent = "Nuevo texto chido"

// Concepto de funciones Setters y Getters para modificar objetos
function get_text(elemento){
	return elemento.textContent
}

function set_text(elemento, texto){
	elemento.textContent = texto
}

alert("Otra alerta chida")

set_text(texto_chido, "HOLAAA")
console.log("El nuevo texto chido es: " + get_text(texto_chido))
