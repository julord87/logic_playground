/*
El Problema:Tienes un arreglo de números ordenados de menor a mayor. Debes encontrar el primer par de números cuya 
suma sea 0.Ejemplo: [-3, -2, -1, 0, 1, 2, 3] -> El par es [-3, 3].Ejemplo: [-2, 0, 1, 3] -> undefined (ninguno suma 0).
Restricción de "Campeón":No puedes usar bucles anidados.Debes resolverlo en una sola pasada ($O(n)$).
*/

const arr_one = [-3, -2, -1, 0, 1, 2, 3];
const arr_two = [-2, 0, 1, 3];

function sumZero(arr) {

  for(let i = 0; i < arr.length; i++) {
    let pointer = arr[i];
    searchOposite(pointer, arr)
  }

  return undefined;
}

function searchOposite(num, arr) {
  for(let i; i < arr.length; i++) {
    if(arr[i] + num === 0) {
      return [num, arr[i]]
    }
  }
}