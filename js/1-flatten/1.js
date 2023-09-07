function flatten(input){
  // Necesitamos saber si el input es tipo primitivo de JS

  // Salida de objetos

  // Salida de arrays
  
  return input
}

// Algunos casos de uso conocido:
console.log("input: 1", "output: " + flatten(1)) // 1
console.log("input: []", "output: " + flatten([])) // []
// console.log("input: 1", "output: " + flatten([1, 2, [3, 4, [], 5]])) // [1, 2, 3, 4, 5]
console.log("input: {}", "output: " + flatten({})) // {}
