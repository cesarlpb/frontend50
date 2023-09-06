# Test Framework

Implementa las siguientes tres funciones de un marco básico de pruebas en JavaScript:

**describe**

Esta función define un conjunto de pruebas relacionadas. Toma un nombre de conjunto de pruebas en forma de cadena `testSuiteName` y una función de devolución de llamada `func`, que realiza una o más llamadas a ella.

**it**

Esta función define una prueba individual en un conjunto de pruebas y se llama dentro de la función de devolución de llamada de `describe`. Toma un nombre de caso de prueba en forma de cadena `testCaseName` y su propia función de devolución de llamada `func`, que realiza una o más llamadas a `expect`.

**expect**

Esta función define una comprobación única en una prueba y se llama dentro de la función de devolución de llamada de `it`. Toma un parámetro arbitrario `actual` y devuelve un objeto con las siguientes tres funciones que se utilizan para comparar `actual` con otros valores:

```expect(actual).toExist()```

Esta función verifica que `actual` no sea ni nulo ni indefinido.

```expect(actual).toBe(expected)```

Esta función verifica que `actual` sea estrictamente igual a `expected`.

```expect(actual).toBeType(type)```

Esta función verifica que `actual` sea del tipo `type`, que puede ser cualquier cadena devuelta por el operador `typeof`.

A medida que se ejecutan un conjunto de pruebas y sus casos de prueba, deben imprimir las siguientes cadenas:

```
// Cuando comienza un conjunto de pruebas:
"comenzando conjunto de pruebas {testSuiteName}"

// Cuando un conjunto de pruebas se completa con éxito:
"conjunto de pruebas {testSuiteName} completado con éxito"

// Cuando comienza un caso de prueba:
"comenzando caso de prueba {testCaseName}"

// Cuando un caso de prueba se completa con éxito:
"caso de prueba {testCaseName} completado con éxito"

// Cuando un conjunto de pruebas falla (porque una comprobación en uno de sus casos de prueba falla):
"fallo al ejecutar el conjunto de pruebas {testSuiteName} en el caso de prueba {testCaseName} con mensaje de error {errorMessage}"

// Cuando `expect(actual).toExist()` falla, `errorMessage` debe ser:
"se esperaba que el valor existiera pero se obtuvo {actual}"

// Cuando `expect(actual).toBe(expected)` falla, `errorMessage` debe ser:
"se esperaba {actual} que sea {expected}"

// Cuando `expect(actual).toBeType(type)` falla, `errorMessage` debe ser:
"se esperaba que {actual} fuera del tipo {type} pero se obtuvo {typeOfActual}"
```

Cuando una comprobación falla, deben ocurrir las siguientes cosas:

La función `expect` relevante debe lanzar el `errorMessage` apropiado.
La función `it` relevante debe lanzar un error arbitrario y su ejecución debe detenerse.
La función `describe` relevante debe imprimir la cadena de fallo con `console.error` (todas las demás cadenas deben imprimirse con `console.log`) y su ejecución debe detenerse.

Por simplicidad:

Todas las cadenas de salida deben estar en minúsculas, sin ningún signo de puntuación.
No se deben realizar modificaciones en los valores de `testSuiteName` y `testCaseName` (no deben convertirse a minúsculas).
Cuando se impriman `actual` y `expected` dentro de los mensajes de error, deben convertirse en cadenas con `JSON.stringify()`.

Ten en cuenta que las pruebas de esta pregunta verifican naturalmente que `console.log` y `console.error` se llaman correctamente; esto significa que depurar tu solución con `console.log` hará que tu solución falle en algunas pruebas.


## Ejemplo de uso #1

```javascript
describe('Conjunto de Pruebas Pasadas', () => {
  it('Caso de Prueba Pasado #1', () => {
    expect('foo').toExist();
    expect(1 + 1).toBe(2);
  });
  
  it('Caso de Prueba Pasado #2', () => {
    expect({}).toBeType('object');
  });
});
```
### Salida de Ejemplo #1

```
// Registros en la consola:
comenzando conjunto de pruebas Conjunto de Pruebas Pasadas
comenzando caso de prueba Caso de Prueba Pasado #1
caso de prueba Caso de Prueba Pasado #1 completado con éxito
comenzando caso de prueba Caso de Prueba Pasado #2
caso de prueba Caso de Prueba Pasado #2 completado con éxito
conjunto de pruebas Conjunto de Pruebas Pasadas completado con éxito
```

## Ejemplo de Uso #2

```javascript
describe('Conjunto de Pruebas Fallidas', () => {
  it('Caso de Prueba Pasado', () => {
    expect(0).toBe(0);
  });

  it('Caso de Prueba Fallido', () => {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it('Caso de Prueba Inalcanzable', () => {
    expect('foo').toBe('bar');
  });
});
```

### Salida de Ejemplo #2

```
// Registros en la consola:
comenzando conjunto de pruebas Conjunto de Pruebas Fallidas
comenzando caso de prueba Caso de Prueba Pasado
caso de prueba Caso de Prueba Pasado completado con éxito
comenzando caso de prueba Caso de Prueba Fallido
// Errores en la consola:
fallo al ejecutar el conjunto de pruebas Conjunto de Pruebas Fallidas en el caso de prueba Caso de Prueba Fallido con mensaje de error se esperaba true que sea false 
```

## Código inicial
```js
function describe(testSuiteName, func) {
  // Escribe tu solución aquí
}

function it(testCaseName, func) {
  // Escribe tu solución aquí
}

function expect(actual) {
  // Escribe tu solución aquí
}
```