'use strict'
const stacks = require('../../stacksAndQueues/stacks-and-queues.js')

class PsudoQueue{
  constructor() {
      this.pqu1= new Stack;
      this.pqu2= new Stack;
      //if the the require and export dose not work
      // this.top = null;
      // this.bottom = null;
      // this.stack= [];

  }
  enqueue(value){
    this.pqu1.push(value);
    return this.pqu1

   
    }
  dequeue(){
    if (this.pqu2.length === 0) {
      if(this.pqu1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (this.pqu1.length > 0) {
     let value = this.pqu1.pop();
        this.top = this.pqu1[this.pqu1.length-1];
        return value;
    }
  }
  return this.pqu2.pop();
      }
    
      
}
let newPqu = new PsudoQueue();
newPqu.enqueue(1);
newPqu.enqueue(2)
newPqu.enqueue(3)