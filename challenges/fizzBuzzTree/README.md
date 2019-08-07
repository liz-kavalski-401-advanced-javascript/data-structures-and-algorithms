# Challenge Summary
The challenge is to look through a tree and replace the numbers divisible by 3 with 'fizz', if divisible by 5 with 'buzz', if the number is divisible by 3 and 5 replace it with '


## Challenge Description
Write a function called FizzBuzzTree which takes a tree as an argument. Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
  * If the value is divisible by 3, replace the value with “Fizz”
  * If the value is divisible by 5, replace the value with “Buzz”
  * If the value is divisible by 3 and 5, replace the value with “FizzBuzz”

Then return the tree with its new values.

## Approach & Efficiency
I started with checking if their was a root and if was divisible by 3, 5 or both. Then used a helper function that is strictly for that function called `_walk` which start at looking at the node to see if the node's value is divisible by 3, 5 or both. Then depening on location of the branch it will either go left or night.  

## Solution
![Solution_Code](https://drive.google.com/file/d/1vFumATdC5G6k7E9HSepRCXRWxgRQGMdh/view?usp=drivesdk)