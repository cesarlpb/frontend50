# JS 7 - Promisify

Escribe una función `promisify` (similar a la función `util.promisify` de Node.js) que tome como argumento una función de devolución de llamada requerida y devuelva una nueva versión "promisificada" de esa función.

La función de devolución de llamada puede tomar cualquier número de parámetros, pero su último parámetro estará garantizado de ser otra función de devolución de llamada, que toma dos parámetros: un error y un valor. Para simplificar, llamaremos a esta otra función de devolución de llamada `handleErrorAndValue`.

Por ejemplo, la siguiente función `adder` podría ser pasada a la función `promisify`:

```javascript
function adder(x, y, handleErrorAndValue) {
  const value = x + y;
  if (typeof value !== 'number') {
    const error = new Error('No es un número');
    handleErrorAndValue(error, null);
  } else {
    handleErrorAndValue(null, value);
  }
}
```

Esta función suma dos valores `x` e `y`, y en caso de que el resultado no sea un número, llama a la función `handleErrorAndValue` con un nuevo error; de lo contrario, pasa el valor sumado como segundo parámetro de la función `handleErrorAndValue` con un error nulo.

Si esta función `adder` se pasara a la función `promisify`, la función `promisificada` resultante funcionaría de la misma manera que `adder`, excepto que devolvería una nueva Promesa. Si la función `handleErrorAndValue` se llamara con un error, la Promesa devuelta sería rechazada con ese error; de lo contrario, la Promesa devuelta se resolvería con el parámetro de valor.

A continuación, tienes un ejemplo de la función `adder` promisificada en acción:

```javascript
const promisifiedAdder = promisify(adder);

promisifiedAdder(1, 2)
  .then(console.log) // Esto mostraría 3.
  .catch(console.error);

promisifiedAdder(1, "foobar")
  .then(console.log)
  .catch(console.error); // Se capturaría un error y se mostraría en la consola.
```

Para ser claro, para llamar adecuadamente a la función de devolución de llamada principal (`adder`, en el ejemplo anterior), deberás implementar la función `handleErrorAndValue`, que deberá pasarse a la función de devolución de llamada principal como su último argumento.

También ten en cuenta que la función de devolución de llamada principal debería tener el contexto `this` del llamador de la función promisificada. Por ejemplo, en el siguiente fragmento de código, la función de devolución de llamada `adder` debería llamarse con el contexto `this` del objeto:

```javascript
const objeto = {};
objeto.promisifiedAdder = promisify(adder);
objeto.promisifiedAdder();
```