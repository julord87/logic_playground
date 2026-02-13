/*
Tienes un arreglo de números (esta vez NO están ordenados) y un número objetivo. 
Debes encontrar los índices de los dos números que sumados den el objetivo.
Ejemplo: twoSum([2, 7, 11, 15], 9)Aquí el objetivo es 9.Como 2 + 7 = 9, la respuesta es [0, 1].
Ejemplo: twoSum([3, 2, 4], 6) -> Respuesta: [1, 2].
Restricción de "Maestro de la Lógica":Debes resolverlo en una sola pasada ($O(n)$).No puedes usar bucles anidados.
*/

const arr_one = [2, 7, 11, 15];
const arr_two = [3, 2, 4];
const target_one = 9;
const target_two = 6;

function twoSum(arr, t) {
  const memory = {}

  for(let i = 0; i < arr.length; i++) {
    let objective = t - arr[i]

    if(memory[objective] !== undefined) {
      return [i, memory[objective]]
    }

    memory[arr[i]] = i;
  }

  return null;
}

console.log(twoSum(arr_one, target_one)) // [0, 1]
console.log(twoSum(arr_two, target_two)) // [1, 2]