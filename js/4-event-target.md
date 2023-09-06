# Event Target

Implementa una clase `EventTarget` (similar a la interfaz EventTarget del DOM), que lleve un registro de los escuchadores de eventos y despache eventos.

Tu clase `EventTarget` debe tener los siguientes tres métodos:

**addEventListener**

Esta función toma dos argumentos: el nombre de un evento como una cadena y una función de devolución de llamada que se llamará cuando se despache el evento en el objetivo.

Por ejemplo, `target.addEventListener('click', onClick)` debería hacer que la función de devolución de llamada `onClick` se llame cuando se despache el evento 'click' en el objetivo.

Un objetivo debe poder tener múltiples escuchadores de eventos para el mismo evento (por ejemplo, `onClick1` y `onClick2`, ambos adjuntos al evento 'click'). Sin embargo, agregar el mismo escuchador de eventos exacto dos veces (con el mismo evento y la misma función de devolución de llamada) no debería tener ningún efecto.

**removeEventListener**

Esta función toma los mismos argumentos que `addEventListener` y elimina el escuchador de eventos relevante.

Por ejemplo, `target.removeEventListener('click', onClick)` debería deshacer los efectos de la llamada a `addEventListener` en el punto anterior.

Si no hay un escuchador de eventos actual para los argumentos pasados, `removeEventListener` no debe tener ningún efecto. Además, si se han agregado dos funciones de devolución de llamada diferentes para el mismo evento 'click' (por ejemplo, `onClick1` y `onClick2`), eliminar una no debería eliminar la otra.

**dispatchEvent**

Esta función toma el nombre de un evento como una cadena. Si no hay escuchadores de eventos para ese evento, no debería suceder nada. De lo contrario, los escuchadores de eventos que existan para ese evento deben tener sus funciones de devolución de llamada invocadas.

Por ejemplo, dado el escuchador de eventos agregado en el primer punto y asumiendo que no se ha eliminado, `dispatchEvent('click')` llamaría a `onClick`.

Los eventos se pueden despachar varias veces y, en cada ocasión, se deben invocar todas las funciones de devolución de llamada asociadas.

Ten en cuenta que los diferentes objetivos de eventos deben estar completamente aislados entre sí. En otras palabras, si tenemos dos objetivos de eventos con el mismo escuchador de eventos, despachar el evento correspondiente a un objetivo no debería desencadenar el otro objetivo.

## Ejemplo de uso:

```javascript
const target = new EventTarget();
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

target.dispatchEvent('hello');
target.dispatchEvent('world');

target.removeEventListener('hello', logHello);

target.dispatchEvent('hello');
target.dispatchEvent('world');
```

### Salida de ejemplo:

```
// Registros en la consola:
hello // Desde la primera desaparición de 'hello'.
world // Desde la primera desaparición de 'world'.
world // Desde la segunda desaparición de 'world'.
// La segunda desaparición de 'hello' no hace nada,
// porque el escuchador de eventos fue eliminado
// antes de ella.
```