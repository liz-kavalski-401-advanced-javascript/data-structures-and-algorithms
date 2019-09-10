'use strict'

function mergeSort(unSortedArr) {
  if (unSortedArr.length <= 1){
   return unSortedArr;
  }
      const mid = Math.floor(unSortedArr.length/2);
      const left = unSortedArr.slice(0,mid);
      const right = unSortedArr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
  }
  function merge (left, right) {
    let resultArray = []; 
    let leftIdx = 0;
    let rightIdx = 0;
  
    while (leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
        resultArray.push(left[leftIdx]);
        leftIdx++; 
      } else {
        resultArray.push(right[rightIdx]);
        rightIdx++; 
      }
    }
  
    return resultArray
            .concat(left.slice(leftIdx))
            .concat(right.slice(rightIdx));
  }
  
  console.log(mergeSort([3,8,6,8,2]))