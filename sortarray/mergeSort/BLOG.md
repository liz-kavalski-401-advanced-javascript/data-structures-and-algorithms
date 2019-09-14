# Merge Sort

## Learning Objective
Today we will be gaining a better understanding of Merge Sort. This include what Merge Sort is and how it works.

## What is it?
Merge sort is a way to sort an array. It dose this be "divide and conquor" the array. This means it breaks the array into smaller pieces and then sort, and bring it back together.

## Diagram 
![MergeSort](Merge_sort.png)

## How dose it work?
The Merge Sort has two parts to it. The frist part is called MergeSort that take-in a un-sorted array, thten it divide the array into smaller arrays to the point where their is only one item in the array. Then the second part is call Merge which take the left and right sides of the arrays and compare the value of each array. Then lastly joined them together into a sorted array. 

## PseudoCode
``` ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Readings and References
#### video
* [Quick video explaining Merge Sort](https://www.youtube.com/watch?v=4VqmGXwpLqc)
#### Read
* [Merge Sort with C# and Phython code](hhttps://www.geeksforgeeks.org/merge-sort/)
* [Merge Sort with JavaScript code](https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060)


