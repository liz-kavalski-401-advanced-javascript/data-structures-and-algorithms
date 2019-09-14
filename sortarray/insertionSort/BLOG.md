# Insertion Sort

## Learning Objective
Today we will be gaining a better understanding of Insertion Sort. This include what Insertion Sort is and how it works.

## What is it?
The term Insertion Sort is use to descride a way to sort an array. Their are different way to sort arrarys. In case the the array is being sorted like cards. Imgine playing "goldfish" with some friends and just been delt seven random cards. In most case people delt cards will sort the cards by numnic value one at a time to help see which cards they have matchs for easier. Which is simaliar on how Insertion Sort.  Below is a diagram of how showing how works.

## Diagram 
![InsertionSort](insertionSort.png)

## How dose it work?
The way Insertion Sort work is as it gose through the array, it compare the current value to the pervious value. If the current number is higher then the pervious number then that number moves up. If the current number is lower then the pervious number then the number is moved towards the lower end of the array. 

## PseudoCode
``` InsertionSort(int[] arr)
  
    FOR i = 1 to arr.length
    
      int j <-- i - 1
      int temp <-- arr[i]
      
      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1
        
      arr[j + 1] <-- temp
```

## Readings and References
#### video
* [Quick video explaining Insertion Sort](https://www.youtube.com/watch?v=JU767SDMDvA)
#### Read
* [Insertion Sort with C# and Phython code](https://www.geeksforgeeks.org/insertion-sort/)
* [Insertion Sort with JavaScript code](https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c)


