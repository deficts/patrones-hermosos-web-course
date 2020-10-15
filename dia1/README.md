# Web Development Desde 0
Bienvenidas!, aquí vas a aprender las bases y todo lo que necesitas saber de HTML y CSS para armar tu primera página web.

## Etiquetas
Las etiquetas son el componente básico de un documento HTML.
**Una etiqueta es un conjunto de palabras encerrado entre estos dos símbolos <>**
```
<Etiqueta>
```
Las etiquetas tienen una etiqueta de cierre; para diferenciarla de la etiqueta de apertura, utilizamos una diagonal.
```
<html> </html>
```
*En este ejemplo, la etiqueta **html** es de apertura y **/html** es la de cierre*

Existen algunas etiquetas que no tienen cierre, así que solo se necesita una. Un ejemplo de esto es la etiqueta del salto de linea. 
```
<br> 
```
## Esqueleto de un documento HTML
Vamos a usar las etiquetas para estructurar nuestro documento HTML.

Lo primero que tenemos que hacer es indicarle a la computadora qué tipo de documento está leyendo, y eso lo haremos con la etiqueta <!DOCTYPE> 
```html
<!DOCTYPE html>
```
Ahora vamos a construir la página. Todo lo que vayamos a mostrar tiene que estar dentro de las etiquetas <html>

```html
<!DOCTYPE html>
<html>

</html>
```
Al igual que tus tareas, las páginas de internet tienen encabezado y cuerpo. el encabezado lo indicamos con la etiqueta **head** y el cuerpo con **body** 
```html
<!DOCTYPE html>
<html>
    <head>

    </head>

    <body>

    </body>

</html>
```
*¿Notas como ponemos una pequeña sangría cuando escribimos una etiqueta dentro del campo de otras etiquetas (las etiquetas dentro de html)?
Esto lo hacemos para que sea más sencillo leer el código. Además de que nos permite llevar el orden de como escribimos, es más sencillo entender lo que has hecho y si existe algún error, es mucho más fácil encontrarlo. Te sugerimos realizar esta buena práctica para que tu código no solo sea bonito cuando se muestra.*

##  Hipervínculos 
Los Hipervínculos son la forma que tenemos para enlazar nuestra página con otra o cargar videos .
**Un hipervínculo, es una conexión directa entre dos espacios virtuales en el mundo digital. Es la forma más rápida que existe en internet de llegar de un punto a otro, con este viajamos a la velocidad de 1 clic.**

Los hipervínculos se manejan con anclas y se colocan de la siguiente manera.
```
<a>..link..</a>
```
*Este es solo el principio, aún faltan mas elementos*

Para que aparezca como un link y te permita enlazar tu página a otra o a un video se debe colocar lo siguiente. 
```
<a href="..link..">TITULO A DESPLEGAR</a>
```
**Es muy importante colocar el título ya que de lo contrario el enlace no tendrá donde mostrarse**

Ejemplo
```
<a href="https://www.google.com/">Enlace a otra página</a>
```

## Tablas
La etiqueta **table** define una tabla. Las tablas tienen renglones, los cuales definiremos con la etiqueta **tr**. Para agregar celdas podemos utilizar dos tipos de etiquetas: **th** para indicar encabezados, y **td** para una celda común. Todas estas etiquetas tienen que tener su respectiva etiqueta de cierre. Checa este ejemplo:
```html
<table>
    <tr>
        <th> Nombre </th>
        <th> Película favorita</th>
        <th> Edad</th>
    </tr>
    <tr>
        <td>Eva</td>
        <td>Los Aristogatos</td>
        <td>11</td>
    </tr>
</table>
```
Este codigo HTML se debe de ver así:

<table>
    <tr>
        <th> Nombre </th>
        <th> Película favorita</th>
        <th> Edad</th>
    </tr>
    <tr>
        <td>Eva</td>
        <td>Los Aristogatos</td>
        <td>11</td>
    </tr>
</table>

### ¡Manos a la obra!

<p align="center">
    <img src="https://github.com/deficts/patrones-hermosos-web-course/blob/day1/dia1/Imagen.png" width="400" height="400"/> 
</p>

Ahora te toca a tí. Has una tabla que tenga el nombre, la estatura y el nombre de la mascota de algunas de tus compañeras. Utiliza el código de ejemplo como idea para hacer el tuyo. Además coloca en tu página web algún enlace a un video, imágen u otra página que quieras.

###### Hasta el momento todo se ha visto muy plano. ¿Cómo le agrego personalidad a mi página?

## Estilos
Los estilos son atributos de las etiquetas. Nos permiten agregar características estéticas a nuestra pagina para modificar cómo se muestra el contenido. Los vamos a utilizar de esta forma:
```
<etiqueta style="propiedad:valor;">
```
donde propiedad es la característica que queremos modificar y valor es lo que le asignaremos a esa caracteística.
La propiedad **color** nos permite modificar el color del texto. Checa este ejemplo:
```html
<p style="color:blue;">Este texto es azul</p>
```
*Puedes checar el resultado en el html de este repo.*

¡Puedes combinar varias propiedades! solo necesitas separarlas con un ;
```html
<p style="color:blue; text-align:center;">Este texto es azul y está alineado al centro</p>
```

Imagínate que quieres agregar demasiadas propiedades a un estilo. Esto podría hacer que las etiquetas se vuelvan largas y difíciles de entender, además de que tendrías que repetir todo el código del estilo cada vez que lo quisieras usar. Pensando en esto, existe CSS. 

## CSS

En CSS puedes crear todos los estilos que sean necesarios y llamarlos como clase en tu HTML. Piensa que puedes clasificar los elementos, y que acada elemento le puedes asignar una clase. ¿De qué clase es? Tú lo defines, y esa clase le dará estilo. 

Antes de poder utilizar un CSS, tenemos que conectarlo con el HTML. Para eso vamos a usar la etiqueta **link**

```html
<link rel="stylesheet" href="miEstilo.css">
```
Te recomendamos que pongas esta etiqueta al principio de tu página, en el encabezado, para que sea lo primero que se cargue y cuando la página se muestre se vea con estilo.

###### Ahora bien, ¿Cómo utilizo el CSS?

Para utilizar el css, hay que hacer las clases que asignaremos en nuestro html, esto se hace de manera muy sencilla. Para hacer una clase, colocamos un punto y el nombre de la clase, seguido de unos corchetes para poner dentro de ellos todas las propiedades

```css
.clase{
    propiedad1: valor1;
    propiedad2: valor2;
    propiedad3: valor3;
}
```
Se utilizan igual que los estilos, de hecho ¡comparten las mismas propiedades! lo unico que cambia es la manera en la que los escribimos y llamamos. Mira el ejemplo:

##### Este es el css
En este css le damos color al fondo, color al texto, cambiamos la tipografía del texto y el tamaño de las letras.

```css
.TextoPrueba{
    background-color: powderblue;
    color: red;
    font-family: courier;
    font-size: 45px;
}
```

##### Este es el HTML
En este archivo HTML, cuando usamos la etiqueta **p** le asignamos la clase que ya declaramos en el css para que tome esos estilos.

```html
<link rel="stylesheet" href="miEstilo.css">
<p class="TextoPrueba"> Hola, este texto está formateado con un archivo css</p>
```

##### Aquí tienes una lista de algunas de las propiedades que puedes utilizar en tus estilos:

- color : permite cambiar el color del texto. puedes utilizar red, blue, black, white o cualquier otro color que se te ocurra, incluso un valor RGB hexadecimal (#FFFFFF).
- background-color : Define el color de fondo del elemento al que se aplica. puedes usar los mismos colores que en color.
- font-family : Define la tipografía del texto
- font-size : Define el tamaño del texto. puedes usar un numero acompañado de la unidad, como puede ser 100% o 13px
- text-align : especifíca la alineación horizontal del texto. puedes usar center, left, richt, justify.


