
let names = [{nombre: "Julian"}, {nombre: "Emiliano"}];

function deepCopy(original) {
  
  // Si es array
  if(Array.isArray(original)) {
    let copy = []
    for(let i = 0; i < original.length; i++) {
      copy.push(deepCopy(original[i]))
    }
    return copy;
  }

  // Si es object
  if(typeof original === 'object' && original !== null) {
    let copy = {}
    for(let key in original) {
      copy[key] = deepCopy(original[key])
    }
    return copy
  }

  // Si es primitivo
  return original
}

let copyOfNames = deepCopy(names)
console.log(copyOfNames)
copyOfNames[0].nombre = "Gomez"
console.log(copyOfNames)
console.log(names)
