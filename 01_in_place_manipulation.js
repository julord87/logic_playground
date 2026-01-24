/* Imagina que recibes una lista de números (puede ser en JS o Python). 
Tu tarea es mover todos los ceros al final de la lista, pero con dos condiciones 
estrictas que un entrevistador técnico valoraría mucho:

No puedes crear una lista/arreglo nuevo (debes modificar el original directamente en memoria). 💾

No puedes usar funciones de alto nivel como .sort(), .filter() o métodos mágicos de Python. Solo puedes usar índices y bucles. ➰

¿Cómo estructurarías los pasos lógicos para resolver esto de la manera más eficiente posible antes de pasar al código? */

const numbers = [0, 1, 0, 3, 12];

function moveZerosToEnd(arr) {
    let lastNonZeroIndex = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] !== 0) {
                    // Swap elements
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    break;
                }
        }
      }
    }
}

moveZerosToEnd(numbers);
console.log(numbers); // Output: [1, 3, 12, 0, 0]