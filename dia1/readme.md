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

