const nums = [5, 3, 8, 4, 2];

const bubbleSort = (arr) => {
  let count = arr.length;
  let noSwaps;

  if(arr.lenght < 2) return arr;

  for(let i = 0; i < count; i++) {
    noSwaps = true;
    for(let j = 0; j < count - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort(nums));
