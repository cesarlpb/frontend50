# Array Methods

Sin llamar a Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce(), o Array.prototype.forEach(), implementa las siguientes tres funciones similares en el prototipo de Array:

```myMap(callback)```

Sin mutar el array original, esta función debe llamar a la función de devolución de llamada pasada en cada elemento del array y devolver un nuevo array que contenga los resultados de todas estas llamadas, en el orden correspondiente.

La función de devolución de llamada puede tomar hasta tres parámetros:

```
- El valor actual en el array.
- El índice actual en el array.
- El propio array.

myFilter(callback)
```

Sin mutar el array original, esta función debe llamar a la función de devolución de llamada pasada en cada elemento del array y devolver un nuevo array que contenga los valores del array original que, cuando se pasen a la función de devolución de llamada, devuelvan true. Estos valores deben mantener su orden original.

La función de devolución de llamada toma los mismos argumentos que la función de devolución de llamada en myMap.

```myReduce(callback, initialValue)```

Sin mutar el array original, esta función debe llamar a la función de devolución de llamada pasada en cada elemento del array y devolver el resultado de la última llamada a la función de devolución de llamada.

La función de devolución de llamada puede tomar hasta cuatro parámetros:

- El acumulador, que es el valor de retorno de la llamada anterior a la función de devolución de llamada. En la primera llamada a la función de devolución de llamada, el acumulador debe configurarse en initialValue. Si initialValue es indefinido, entonces debe configurarse en el primer valor del array, y la función de devolución de llamada debe omitir el primer elemento del array y llamarse directamente en el segundo elemento.
- El valor actual en el array.
- El índice actual en el array.
- El propio array.

Si el array no contiene elementos, initialValue debe devolverse. Ten en cuenta que esto difiere ligeramente de la función Array.prototype.reduce.

## Ejemplo de uso:

```javascript
const array = [1, 2, 3];

const mappedArray = array.myMap((valor, i, arr) => {
  return valor + i + arr[1];
});

const filteredArray = array.myFilter((valor, i, arr) => {
  return (valor + i + arr[1]) > 5;
});

const reducedValue = array.myReduce((acumulador, valor, i, arr) => {
  return acumulador + valor + i + arr[1];
}, 3);

console.log(mappedArray);
console.log(filteredArray);
console.log(reducedValue);
```

### Salida de ejemplo:

```
// Registros en la consola:
[3, 5, 7] // De myMap.
[3] // De myFilter.
18 // De myReduce.
```

## Código inicial

```js
Array.prototype.myMap = function (callback) {
  // Escribe tu solución aquí
};

Array.prototype.myFilter = function (callback) {
  // Escribe tu solución aquí
};

Array.prototype.myReduce = function (callback, initialValue) {
  // Escribe tu solución aquí
};

```