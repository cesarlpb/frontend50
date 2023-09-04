# HTML 4 - Blog Post

**Nota:** si quieres hacer un post con otro contenido, no se revisará el texto pero sí los elementos de HTML.

--

```
Se te ha proporcionado una publicación de blog en texto plano, y necesitas convertir esta publicación en un archivo HTML correctamente marcado.

- La publicación debe tener un encabezado principal de "Introduciendo CodrCoin" con un eslogan de "El futuro de la moneda de memes descentralizada está aquí.".

- La publicación debe tratarse como un artículo con dos secciones, tituladas "¿Qué es CodrCoin?" y "¿Por dónde empiezo?", respectivamente. Cada sección debe tener un párrafo de texto (el texto directamente debajo del título de la sección en el código inicial), y las secciones deben estar divididas por una línea horizontal.

- En la primera sección, el texto "proof-of-inverted-binary-tree consensus algorithm" debe estar marcado como texto fuerte (strong), y "Web 4.0" debe estar enfatizado (emphasized). En la segunda sección, la palabra "Codr" debe ser un enlace a https://codr.io, y debe abrirse en una nueva pestaña.

- Finalmente, la publicación debe tener un pie de página al final con el texto "Copyright 2023 CodrCoin. Todos los derechos reservados.".

Tu código HTML debe usar un marcado semántico adecuado. Sin embargo, solo necesitas escribir el HTML que iría dentro de la etiqueta <body> del documento; NO ES NECESARIO preocuparse por la etiqueta <head>, la etiqueta <html> ni la declaración <!DOCTYPE>.
```
## CSS
```css
  body{
  background-color: lightgrey;
  }
```
## Sugerencia de presentación

## Sugerencia de solución
```html
<article>
  <!-- Cabecero -->
  <header>
    <h2>Título del Post</h2>
    <p id="subtitle">Subtítulo</p>
  </header>

  <!-- Secciones -->
  <section><!-- h3 y p --></section>
  <hr>
  <section><!-- h3 y p --></section>

  <!-- Pie de página-->
  <footer>Copyright 2023 CodrCoin. Todos los derechos reservados.</footer>
</article>
```
