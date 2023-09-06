# This Binding

Sin llamar a `Function.prototype.call`, `Function.prototype.apply` o `Function.prototype.bind`, implementa las siguientes tres funciones similares en el prototipo de Function:

```myCall(thisContext, ...args)```

`myCall` debería llamar a la función original con thisContext enlazado a la palabra clave this de la función, pasando todos los args restantes como argumentos individuales a la función.

El valor de retorno de la función original debería ser devuelto por myCall.

```myApply(thisContext, args)```

myApply debería llamar a la función original con thisContext enlazado a la palabra clave this de la función, pasando todos los valores en el array args como argumentos individuales a la función.

El valor de retorno de la función original debería ser devuelto por myApply.

```myBind(thisContext, ...args)```

`myBind` debería devolver una nueva función que llama a la función original con thisContext enlazado a la palabra clave this de la función, pasando todos los args restantes como argumentos individuales a la función. La nueva función debería aceptar argumentos opcionales, que también deberían ser pasados a la función original, después de los args originalmente pasados a myBind.

La nueva función debería devolver el valor de retorno de la función original.

Puedes asumir que el argumento thisContext pasado a cada función siempre será un objeto. Cuando se enlace este objeto a la palabra clave this, debería enlazarse el objeto original, no una copia. También puedes asumir que la función original se declarará utilizando la sintaxis estándar de funciones (es decir, no será una función de flecha).

Deberías minimizar los efectos secundarios tanto como sea posible, asegurando que thisContext permanezca sin cambios después de las llamadas a estas funciones y asegurando que la iteración estándar a través de las propiedades en thisContext funcione normalmente.

## Ejemplo de Uso:

```javascript
const obj = {num: 0};

function logNums(x, y) {
  console.log(this.num, x, y);
}

logNums.myCall(obj, 1, 2);
logNums.myApply(obj, [1, 2]);

const boundFunction = logNums.myBind(obj, 1);
boundFunction(2);
```

### Salida de ejemplo:

```
// Registros en la consola:
0 1 2 // Desde myCall.
0 1 2 // Desde myApply.
0 1 2 // Desde myBind.
```

## Código inicial

```js
Function.prototype.myCall = function (thisContext, ...args) {
  // Escribe tu solución aquí
};

Function.prototype.myApply = function (thisContext, args = []) {
  // Escribe tu solución aquí
};

Function.prototype.myBind = function (thisContext, ...args) {
  // Escribe tu solución aquí
};

```