# Throttle

Escribe una función `throttle` que tome como argumento una función de devolución de llamada requerida y un retraso requerido en milisegundos.

Llamar a `throttle(callback, delay)` debería devolver una nueva versión "restringida" de la función de devolución de llamada, que tome los mismos parámetros que la función de devolución de llamada original, y que, cuando se ejecute, llame a la función de devolución de llamada como máximo una vez por intervalo de retraso.

La primera vez que se llama a la función restringida, la función de devolución de llamada subyacente debería ejecutarse inmediatamente. Si se vuelve a llamar a la función restringida antes de que transcurra el retraso, la siguiente llamada a la función de devolución de llamada subyacente debería programarse para que se ejecute después de `delay` milisegundos desde la última llamada a la función de devolución de llamada. Si se llama a la función restringida varias veces en un intervalo de retraso, se deben usar los argumentos de la última llamada.

Por ejemplo, llamar repetidamente y continuamente a una función restringida con un retraso de 3000ms llamaría a la función de devolución de llamada subyacente exactamente una vez cada 3 segundos.

La función `throttle` también debe agregar un método `cancel` a la función restringida (recuerda, las funciones son simplemente objetos). Cuando se llame a este método, cualquier llamada programada debe cancelarse.

Ten en cuenta que las funciones de devolución de llamada subyacentes deberían tener el contexto `this` de los llamadores de la función restringida. Por ejemplo, en el siguiente fragmento de código, la función de devolución de llamada subyacente debería llamarse con el contexto `this` del objeto:

```javascript
const objeto = {};
objeto.restringida = throttle(algunaFuncion, 1000);
objeto.restringida();
```

Puedes asumir que las funciones de temporización de JavaScript son lo suficientemente precisas para esta pregunta (no es necesario preocuparse por que los tiempos de espera no se ejecuten en momentos exactos). Tampoco es necesario guardar el valor de retorno de la función restringida; puede devolver `undefined`.

## Ejemplo de uso #1

```javascript
const restringida = throttle(console.log, 3000);
document.addEventListener('keypress', () => restringida(currentTime));

// currentTime = 0ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: muestra en la consola el currentTime del último keypress, que fue de 0ms.
// currentTime = 1000ms - el usuario deja de escribir.
// currentTime = 3000ms - han transcurrido 3000ms desde el último registro.
// La función de devolución de llamada se ejecuta: muestra en la consola el currentTime del último keypress, que fue de 1000ms.
// currentTime = 7000ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: muestra en la consola el currentTime del último keypress, que fue de 7000ms.
// currentTime = 9000ms - el usuario deja de escribir.
// currentTime = 10000ms - han transcurrido 3000ms desde el último registro.
// La función de devolución de llamada se ejecuta: muestra en la consola el currentTime del último keypress, que fue de 9000ms.
```

## Ejemplo de uso 2
```javascript
const restringida = throttle(console.log, 3000);
document.addEventListener('keypress', () => restringida(currentTime));

// currentTime = 0ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: muestra en la consola el currentTime del último keypress, que fue de 0ms.
// currentTime = 1000ms - el usuario deja de escribir.
// currentTime = 2000ms - se llama a throttled.cancel().
// currentTime = 4000ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: muestra en la consola el currentTime del último keypress, que fue de 4000ms.
// currentTime = 5000ms - el usuario deja de escribir; luego se llama a throttled.cancel().
// currentTime = 7000ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: muestra en la consola el currentTime del último keypress, que fue de 7000ms.
// currentTime = 8000ms - el usuario deja de escribir.
// currentTime = 9000ms - se llama a throttled.cancel().
```