/*
El Problema:Tienes una cadena de texto (string). Debes encontrar el índice del primer carácter que no se repite en toda la cadena. 
Si todos se repiten, devuelve -1.Ejemplo: firstUniqChar("letras")La 'l' no se repite. Respuesta: 0.
Ejemplo: firstUniqChar("loveletra")La 'l' se repite, la 'o' se repite, la 'v' NO. Respuesta: 2.
Ejemplo: firstUniqChar("aabb") -> Respuesta: -1.Reglas de Entrenamiento:Resuélvelo en tiempo lineal $O(n)$. 
(O sea, puedes recorrer la cadena un par de veces, pero no una dentro de otra).Usa la técnica del Contador de Frecuencias 
(el objeto/memoria).
*/

const str_one = "letras";
const str_two = "loveletra";
const str_three = "aabb";

const firstUnique = (str) => {
  let charMemo = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charMemo[char] ? (charMemo[char] += 1) : (charMemo[char] = 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (charMemo[str[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(firstUnique(str_one));
console.log(firstUnique(str_two));
console.log(firstUnique(str_three));

// Solucion alternativa usando un solo bucle con un map:

const firstUniqueAlt = (str) => {
  const charMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!charMap.has(char)) {
      // Es la primera vez que lo vemos, guardamos su posición
      charMap.set(char, i);
    } else {
      // ¡Repetido! Lo marcamos con Infinity para descartarlo
      charMap.set(char, Infinity);
    }
  }

  // Ahora solo buscamos el primer valor en el Map que no sea Infinity
  for (const index of charMap.values()) {
    if (index !== Infinity) return index;
  }

  return -1;
};

console.log(firstUniqueAlt(str_one));
console.log(firstUniqueAlt(str_two))
console.log(firstUniqueAlt(str_three))
