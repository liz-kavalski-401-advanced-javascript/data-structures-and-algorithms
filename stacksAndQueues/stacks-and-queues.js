'use strict';

import { ModuleMap } from "jest-haste-map";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Stack{
    constructor() {
        this.top = null;
        this.bottom = null;
        this.stack= [];
      }
      push(value){
        this.stack.push(value);
        this.top = value

      };
      pop(){
        let value = this.stack.pop();
        this.top = this.stack[this.stack.length-1];
        return value;
      };
      peek(){
        return this.top
      };
}

class Queues{
    constructor() {
        this.front = null;
        this.rear = null;
        this.queue= []
      }
      enqueue(value){
        this.queue.push(value);
        this.rear = value;
        console.log(this.rear)
      };
      dequeue(){
        let value = this.queue.shift();
        this.front = this.queue
        this.queue.shift();
        return value 
        
      };
      peek(){
          return this.queue[0];
      };
}

let myStacks = new Stack();
myStacks.push('cat');
myStacks.push('dog');
myStacks.push ('fish');
console.log(myStacks.pop(), 'this is pop');
console.log(myStacks.peek(), 'this peek');
//console.log(myStacks.stack)

// let myQu =new Queues();
// myQu.enqueue(1);
// myQu.enqueue(2);
// myQu.enqueue(3);
// myQu.enqueue('dog')
// console.log(myQu.dequeue(), 'this is dequeue');
// console.log(myQu.peek(), 'this is peek');

module.export = stacksAndQueues;