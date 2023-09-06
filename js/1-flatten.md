# JS 1 - Flatten

```
Escribe una función "flatten" que tome un valor y devuelva una versión aplanada de ese valor.

Para los fines de este problema, un valor aplanado se define de la siguiente manera:

- Los valores primitivos deben permanecer sin cambios.
- Los arrays anidados deben tener sus valores elevados al nivel superior del array. Por ejemplo, [1, 2, [3, 4, [5, 6]]] se aplanaría a [1, 2, 3, 4, 5, 6].
- Los objetos anidados deben tener sus pares clave-valor elevados al nivel superior del objeto. Por ejemplo, {a: 1, b: {c: 2, d: 3, e: {f: 4}}} se aplanaría a {a: 1, c: 2, d: 3, f: 4}. Ten en cuenta que esto significa que las claves "b" y "e" se eliminaron por completo, ya que sus valores se aplanaron al nivel superior. En caso de colisión de claves (por ejemplo, {a: 1, b: {a: 2}}), se puede usar cualquier valor asociado.
- Los arrays anidados en objetos y objetos anidados en arrays deben aplanarse. Por ejemplo, {a: [1, 2, [3, 4]]} se aplanaría a {a: [1, 2, 3, 4]}, y [{a: 1, b: {c: 2, d: 3}}] se aplanaría a [{a: 1, c: 2, d: 3}].

Para simplificar, puedes suponer que el valor, así como cualquier valor anidado, no serán funciones. Además, puedes suponer que todas las claves de objetos son cadenas. Tu solución puede devolver un valor aplanado en su lugar o puede devolver un nuevo valor, ambas son aceptables.

Tu código no debe llamar a la función nativa Array.prototype.flat().
```

## Ejemplo de uso

```javascript
flatten(1); // 1
flatten([]); // []
flatten([1, 2, [3, 4, [], 5]]); // [1, 2, 3, 4, 5]
flatten({}); // {}
flatten({
  a: null,
  b: undefined,
  c: {
    d: true,
    e: 4,
    f: {},
    g: {
      h: 5
    },
  },
}); // {a: null, b: undefined, d: true, e: 4, h: 5}
flatten([1, 2, [3], {
  a: 4,
  b: {
    c: 5,
    d: [6, 7, [8, 9, [10]]],
  },
}]) // [1, 2, 3, {a: 4, c: 5, d: [6, 7, 8, 9, 10]}]
```