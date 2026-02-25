const nums = [5, 3, 8, 4, 2];

const selectionSort = (arr) => {
  let count = 0;
  let minIndex = 0;
  let noSwap;

  for (let i = count; i < arr.length; i++) {
    noSwap = true;
    minIndex = i;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        noSwap = false;
      }
    }

    if (!noSwap) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
      count++;
    }
  }

  return arr;
};

console.log(selectionSort(nums));



////////////////////////////////////////////////////////////////// Solution without swap optimization

function selectionSortOpt(arr) {

  for (let i = 0; i <= arr.length; i++) {
    let minIndex = i;

    for(let j = i + 1; j <= arr.length; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }

    if(minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp
    }
  }
  return arr;
}

console.log(selectionSortOpt(nums))
