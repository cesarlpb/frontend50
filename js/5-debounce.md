# Debounce

Escribe una función de debounce que tome como argumentos una función de devolución de llamada requerida, un retraso en milisegundos requerido y un valor booleano opcional llamado "inmediato," que tiene un valor predeterminado de falso.

Llamar a `debounce(callback, delay)` debería devolver una nueva versión "debounceada" de la función de devolución de llamada, que toma los mismos parámetros que la función original y que, cuando se ejecuta, debería llamar a la función de devolución de llamada después de que hayan transcurrido "delay" milisegundos desde la última llamada a esta función debounceada.

Por ejemplo, llamar repetidamente a una función debounceada con un retraso de 3000 ms cada segundo nunca llamaría a la función de devolución de llamada subyacente, porque no ha transcurrido el retraso de 3000 ms desde la última llamada.

Si el argumento "inmediato" es verdadero, entonces la primera llamada a la función debounceada debería ejecutar inmediatamente la función de devolución de llamada subyacente. Sin embargo, la función de devolución de llamada no debería poder ejecutarse nuevamente hasta que hayan transcurrido "delay" milisegundos desde la última llamada a la función debounceada.

En este caso, llamar repetidamente a una función debounceada con un retraso de 3000 ms cada segundo llamaría a la función de devolución de llamada subyacente una vez inmediatamente después de la primera llamada, y luego nunca más, porque no ha transcurrido el retraso de 3000 ms desde la última llamada.

Ten en cuenta que las funciones de devolución de llamada subyacentes deben tener el contexto "this" de los llamadores de la función debounceada. Por ejemplo, en el siguiente fragmento de código, la función de devolución de llamada subyacente debería llamarse con el contexto "this" del objeto:

**Nota:** Usad `debounce` para el nombre de la función y `debounced` para la propiedad por claridad:

```javascript
const objeto = {};
objeto.debounced = debounce(algunCallback, 1000);
objeto.debounced();
```

Puedes asumir que las funciones de temporización de JavaScript son lo suficientemente precisas para esta pregunta (no es necesario preocuparse por que los tiempos de espera no se disparen en momentos exactos).

## Ejemplo de Uso #1
```javascript
const debouncedCallback = debounce(console.log, 3000);
document.addEventListener('keypress', () => debounced(tiempoActual));

// tiempoActual = 0 ms - el usuario comienza a escribir.
// tiempoActual = 1000 ms - el usuario deja de escribir.
// tiempoActual = 4000 ms - han transcurrido 3000 ms desde la última pulsación de tecla.
// La función de devolución de llamada se ejecuta: registra el tiempoActual, que es 1000 ms.
// tiempoActual = 7000 ms - el usuario comienza a escribir.
// tiempoActual = 9000 ms - el usuario deja de escribir.
// tiempoActual = 12000 ms - han transcurrido 3000 ms desde la última pulsación de tecla.
// La función de devolución de llamada se ejecuta: registra el tiempoActual, que es 9000 ms.
```

## Ejemplo de uso #2

```javascript
const debouncedFn = debounce(console.log, 3000, true);
document.addEventListener('keypress', () => debounced(tiempoActual));

// tiempoActual = 0 ms - el usuario comienza a escribir.
// La función de devolución de llamada se ejecuta inmediatamente: registra el tiempoActual, que es 0 ms.
// tiempoActual = 3000 ms - el usuario deja de escribir.
// tiempoActual = 5000 ms - el usuario comienza a escribir; no han transcurrido 3000 ms desde la última pulsación de tecla.
// tiempoActual = 6000 ms - el usuario deja de escribir.
// tiempoActual = 9000 ms - el usuario comienza a escribir; han transcurrido 3000 ms desde la última pulsación de tecla.
// La función de devolución de llamada se ejecuta inmediatamente: registra el tiempoActual, que es 9000 ms.
// tiempoActual = 12000 ms - el usuario deja de escribir.
```

## Código inicial
```js
function debounce(callback, delay, immediate = false) {
  // Escribe tu solución aquí
}
```