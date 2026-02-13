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
  let max_sum = -Infinity; // O puedes inicializarlo con null
  
  for(let i = 0; i <= arr.length - n; i++) {  // Nota: <= para incluir el último grupo
    let temp = 0;  // Mover aquí
    
    for(let j = i; j < i + n; j++) {  // j < i + n para sumar n elementos
      temp += arr[j];
    }
    
    if(temp > max_sum) {
      max_sum = temp;
    }
  }
  
  return max_sum;
}

console.log(sumInArray(arr_one, num_one)) // 10
console.log(sumInArray(arr_two, num_two)) // 6
console.log(sumInArray(arr_one, num_three)) // 15


//// Solución con ventana deslizante

function sumInArraySlidingWindow(arr, n) {
  if(n > arr.length) return null; // Manejar caso donde n es mayor que el tamaño del arreglo

  let max_sum = 0;

  // Calculo la primera suma del array
  for(let i = 0; i < n; i ++) {
    max_sum += arr[i]
  }

  let temp_sum = max_sum;

  // Deslizar la window
  for(let i = n; i < arr.length; i++) {
    temp_sum = temp_sum - arr[i - n] + arr[i];
    if(temp_sum > max_sum) {
      max_sum = temp_sum
    }
  }
  return max_sum;
}

console.log(sumInArraySlidingWindow(arr_one, num_one)) // 10
console.log(sumInArraySlidingWindow(arr_two, num_two)) // 6
console.log(sumInArraySlidingWindow(arr_one, num_three)) // 15