'use strict'
function quickSort(arr,left,right){
  if(arr.length <=0){
    return arr
  }
    let len = arr.length, pivot,partitionIndex;

   if(left <right){
     pivot = right;
     partitionIndex = partition(arr,pivot,left,right)

     quickSort(arr,left,partitionIndex-1);
     quickSort(arr,partitionIndex+1,right)
   }
 return arr;
}
function partition(arr,pivot,left,right){
 let pivotValue = arr[pivot];
 let partitionIndex=left;

 for(let i =left; i < right; i++){
   if(arr[i]< pivotValue){
     swap(arr,i,partitionIndex);
     partitionIndex++;
   }
 }
 swap(arr,right,partitionIndex)
 return partitionIndex;
}
function swap(arr,i,j){
 let temp = arr[i];
 arr[i]=arr[j];
 arr[j]=temp
}

quickSort([1,6,8,2,9,14,0,-1],0,7);
