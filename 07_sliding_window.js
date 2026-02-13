/*
El Problema:Tienes un arreglo de números enteros y un número n. Debes encontrar la suma máxima de n números consecutivos 
del arreglo.Ejemplo: maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)Aquí n es 2. 
Las parejas posibles son [1,2], [2,5], [5,2], [2,8], [8,1], [1,5].La suma máxima es 10 (de la pareja [2, 8]).
Ejemplo: maxSubarraySum([4, 2, 1, 6], 1) -> Suma máxima: 6.
Restricción de "Ingeniero":No puedes usar bucles anidados.Debes resolverlo en una sola pasada ($O(n)$).
*/

const arr_one = [1, 2, 5, 2, 8, 1, 5];
const arr_two = [4, 2, 1, 6];
const num_one = 2;
const num_two = 1;
const num_three = 3;

function sumInArray(arr, n) {

  for(let i = 0; i < arr.length - n; i++) {
    let max_sum = 0;
    for(let j = i; j < n; j++) {
      max_sum += arr[j]
    }
  }
}