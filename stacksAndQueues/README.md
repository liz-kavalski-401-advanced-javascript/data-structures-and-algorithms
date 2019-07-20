 # Stacks and Queues
We created a Stack and Queues classes and extended it by giving it several methods for users to add new entries, remove entries, and to know the frist value of the Stack/Queues.

## Challenge
Create a Node classes with methods that can be done on a Stack or Queues data model.
  #### Stack
  * `peek` - return the value of the top node

  * `push` - add another node to the top of the stack

  * `pop` - remove the node from the stack and return the value 
  #### Queues

* `peek` - reuturns the value of the node at the front

* `enqueue` - adds a the rear of the queue

* `dequeue` - remove from the front of the queue.



## Approach & Efficiency
In order to create our methods we decided to turn the stacks and queues into arrarys. That way we can use JavaScript built-in arrary methods. In each class it start with a constructor that set the top/front, the bottem/rear and an empty. Also in both the `peek` is just returning the top/front value. 

In the Stack class we used the array method `push()` to add to the top and replace the top node with the new node. With `pop()` we used the array method `pop()` and replace the top with the next node from the top, and then return the value.

In the Queues class we did the same things by using array methods. For `enqueue` we used the `push()` to add to the end of the queues. While we used `shift()` to add to the front of the queue. 

## UML
none at this point
