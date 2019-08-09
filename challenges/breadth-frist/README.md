# Challenge Summary
Write a class that extends from the `Binary class`. The method should traveral through the tree and return the root first, then the left and right value of the node. 

## Challenge Description
Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach; print every visited node’s value.

## Approach & Efficiency
We started with two arrays; one called queue that has the root already in it and hold the current node, and the other was called output to hold values to pop off the queue array. Then checking if their was a root. If their was then while the node was current it will either go left or right and put the value in the queue. Then push the current node to the output. It will move left to right frist.

## Solution
<!-- Embedded whiteboard image -->