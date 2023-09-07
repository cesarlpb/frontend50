function  isPrimitive(variable){
  if( typeof variable == 'function'){
    throw new Error('No se admiten funciones como input')
  }
  if(variable === null){
    return true; // null bugeado. Más info: https://2ality.com/2013/10/typeof-null.html
  }
  // Los tipos considerados primitivos además del null:
  tiposPrimitivos = ["undefined", "number", "boolean", "string"]
  if( tiposPrimitivos.includes((typeof variable).toString()) ){
    return true
  }
  return false
}
function flattenArray(arr){
  let flattenedArray = []
  for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    // Caso [] -> no se añade elemento al array "aplanado"
    if(Array.isArray(item) && item.length == 0){
      continue
    }
    // Si es array -> se "aplana"
    else if(Array.isArray(item)){
      let temp = flattenArray(item) // item es un array -> recursión
      temp.forEach(e => { flattenedArray.push(e) })
    }
    // Caso en el que no tenemos array, es un número, string...
    else{
      flattenedArray.push(item)
    }
  }
  return flattenedArray
}
function flatten(input){
  // Necesitamos saber si el input es tipo primitivo de JS
    let isPrimitiveInput = isPrimitive(input) // true o false
    // funciones no se admiten como input
    if(isPrimitiveInput){
      return input
    }else{
      if(typeof input === 'object' &&
      !Array.isArray(input) &&
      input !== null){
        // Salida de objetos
        return 'object'
      } else if(Array.isArray(input)){
        // Salida de arrays 
        return flattenArray(input)
      }else{
        throw new Error('Tipo de variable no válido' + typeof variable)
      }
    }
}

// Algunos casos de uso conocido:
console.group("Casos de input primitivo:")
  console.log("input: null,", "output: " + flatten(null)) // null
  console.log("input: undefined,", "output: " + flatten(undefined)) // undefined
  console.log("input: 1,", "output: " + flatten(1)) // 1
  console.log("input: 'text',", "output: " + flatten('text')) // 'text'
console.groupEnd()

let objeto = {
  "a": "algo",
  "b": {"c": "más cosas"}
}
let arrayAnidado = [1,2,[3,4],[], "text", [[[1,2,3]]]]
console.group("Casos de input no primitivo:")
  console.log("input: [],", "output: [" + flatten([]) + "]  ") // []
  console.log("input: [1, 2, 3],", "output: " + flatten([1, 2, 3])) // []
  console.log("input: [" + arrayAnidado + "]  ", "output: [" + flatten(arrayAnidado) + "]") // [1, 2, 3, 4, 'text', 1, 2, 3]  
  console.log("input: {},", "output: " + flatten({})) // {}
  console.log("input: ," + JSON.stringify(objeto), "output: " + flatten(objeto)) // {}
console.groupEnd()
// console.log("input: 1", "output: " + flatten([1, 2, [3, 4, [], 5]])) // [1, 2, 3, 4, 5]
