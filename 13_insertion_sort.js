// insertion sort

const nums = [5, 2, 9, 1, 5, 6];
const nums2 = [12, 11, 13, 5, 6];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    for(let j = i - 1; j >= 0; j--) {
      if(arr[j] > current) {
        arr[j + 1] = arr[j]
        arr[j] = current
      }
    }
  }
  return arr;
}

console.log(insertionSort(nums))
console.log(insertionSort(nums2))


// optimized version

const insertionSortOpt = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Mientras el de la izquierda sea mayor que mi valor actual...
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Simplemente desplazamos el valor a la derecha
      j--; // Seguimos mirando hacia atrás
    }
    
    // Una vez que salimos del bucle, j + 1 es el hueco donde debe ir current
    arr[j + 1] = current;
  }
  return arr;
}