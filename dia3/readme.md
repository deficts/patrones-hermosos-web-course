# Web Development Crash Course

**¡Hola! sí llegaste hasta acá quiere decir que vas a crear tu primera página web, aquí están algunas de las herramientas que estaremos utilizando!**

- Antes de comenzar necesitamos un editor de texto puedes usar notepad o textedit pero yo recomiendo que descarguen [Visual Studio Code](https://code.visualstudio.com/download).
- [Generador de gradientes](https://cssgradient.io/).
- [Generador de spotify](https://developer.spotify.com/documentation/widgets/generate/embed/).
- [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/).

**Primero que nada vamos a crear nuestros archivos en nuestra carpeta/directorio nuestra estructura va a quedar algo así:**
<p align="center">
    <img src="https://github.com/deficts/patrones-hermosos-web-course/blob/master/dia3/directorio.png">
</p>

**En nuestro archivo de index.html comenzaremos con algo así:**

[index.html](index.html)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Mi Primer WebPage</title>
    <link rel="stylesheet" href="./main.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    Hola Mundo!
    <script src="./main.js"></script>
</body>
</html>
```
### Como pueden ver hay 3 líneas importantes que debemos entender aquí:

**Aquí estamos haciendo una referencia a nuestro archivo de css**
```html
<link rel="stylesheet" href="./main.css">
```

**Aquí estamos haciendo referencia a bootstrap basícamente es un archivo de css con un montón de utilidades y herramientas que nos van a ayudar mucho**
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```

**Finalmente estamos haciendo el link con nuestro archivo de JS para que la parte visual se pueda comunicar con la parte "Funcional"**
```html
<script src="./main.js"></script>
```

## Ahora comenzaremos con el código

**Crearemos un header con un saludo, nuestra foto y un poco de información sobre nosotros, es importante que todo esto este dentro de nuestro tag de body**

[index.html](index.html)
```html
<---! Creamos un contenedor de bootstrap para mantener un orden --->
<div class="container mt-2">
    <---! Dentro de los contenedores tenemos que dividir todo en rows(filas) --->
    <div class="row">
        <---! Dentro de las rows tenemos que dividir todo en cols(columnas) --->
        <div class="col text-center">
            <h1>Hola! Mi nombre es Diego!</h1>
        </div>
    </div>
    <div class="row">
        <div class="col text-center">
            <---! Aquí agregamos una imágen, tenemos que asegurarnos que la guardamos en nuestra carpeta de "assets" en nuestro proyecto --->
            <img id="mi-foto" src="./assets/yo.jpeg" alt="Una foto mía">
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-sm-12 col-md-6 offset-md-3">
            <p>Soy un estudiante de ingeniería en software de Guadalajara, México 🇲🇽, me gusta hacer CrossFit y
                comer tacos.</p>
            <div class="text-center">
                <---! Aquí tenemos un anchor, esto es un link a cualquier URL que queramos, lo que hicimos es agregarle una imágen dentro del anchor para que la imágen sea el link --->
                <a href="https://instagram.com/deficts" class="mr-2" style="text-decoration: none;">
                    <---! Aquí usamos por primera vez una clase de css "social-icon", es momento de ver un poco de css --->
                    <img class="social-icon" src="./assets/social/instagram.png" alt="instagram">
                </a>
                <a href="https://twitter.com/deficts" class="mr-2" style="text-decoration: none;">
                    <img class="social-icon" src="./assets/social/twitter.png" alt="instagram">
                </a>
                <a href="https://github.com/deficts" style="text-decoration: none;">
                    <img class="social-icon" src="./assets/social/github.png" alt="instagram">
                </a>
            </div>
        </div>
    </div>
</div>
```

**Continuamos con un poco de CSS, los íconos que agregamos probablemente se ven muy grandes y además el fondo blanco no se ve tan llamativo, hagamonos cargo de eso**

- Dirigamonos al [Generador de gradientes](https://cssgradient.io/) juguemos con la herramienta y copiemos el resultado de la parte de abajo.

[main.css](main.css)
```css
/*
    Le daremos el gradiente a nuestro body ya que este es el que envuelve toda la página
*/
body{
    background: rgb(161,255,160);
    background: linear-gradient(180deg, rgba(161,255,160,1) 36%, rgba(237,186,186,1) 92%) fixed;
}

/*
    Crearemos la clase social-icon para que nuestros íconos tengan el mismo tamaño
*/
.social-icon{
    max-height: 30px;
}
```

**Hora de darle un poco de sabor a nuestra página**
- Dirigamonos al [Generador de spotify](https://developer.spotify.com/documentation/widgets/generate/embed/) sigamos el tutorial y escogamos nuestra canción favorita del momento y nuestra canción favorita de todos los tiempos.

[index.html](index.html)
```html
<!--- Seguimos creando rows contenidas por nuestro "container" mb-4: clase de bootstrap para agregar margin bottom --->
<div class="row mb-4">
    <!--- Creamos una columna con tamaño 6 en pantallas medianas y tamaño 12(full) para pantallas pequeñas--->
    <div class="col-md-6 col-sm-12">
        <!--- Tenemos una nueva clase de css "carta" --->
        <div class="carta text-center">
            <!--- Creamos un título --->
            <h4> Escucha mi canción favorita del momento:</h4>
            <!--- Agregamos el snippet de código que nos generó spotify --->
            <h4> Escucha mi canción favorita del momento:</h4>
            <iframe style="margin: 0 auto;" src="https://open.spotify.com/embed/track/1yoMvmasuxZfqHEipJhRbp"
                width="300" height="80" frameborder="0" allowtransparency="true"
                allow="encrypted-media"></iframe>
        </div>
    </div>
    <!--- Repetimos con otra columna --->
    <div class="col-md-6 col-sm-12">
        <div class="carta text-center">
            <h4> Escucha mi canción favorita de siempre:</h4>
            <iframe src="https://open.spotify.com/embed/track/0f5B2p63SHBNHxuBzIr9qQ" width="300" height="80"
                frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
    </div>
</div>
```

**Nuestras columnas se ven muy equis, creemos la clase carta en nuestro css**

[main.css](main.css)
```css
/*
    Agregamos un color de fondo claro, bordes redondeados con border-radius y una sombra con box-shadow
*/
.carta{
    margin-top: 16px;
    background-color: #f4f4f4;
    border-radius: 20px;
    padding:10px;
    box-shadow: 0 0 20px 1px;
}
```
