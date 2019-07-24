const stacks = require('../../stacksAndQueues/stacks-and-queues.js')

class AnimalShelter{
  constructor() {
      this.an1 = new Stack;
      this.an2= new Stack;
      //if the the require and export dose not work
      // this.top = null;
      // this.bottom = null;
      // this.an1= [];
      // this.an2= [];

  }
  enqueue(value){
    this.an1.unshift(value);
    return this.an1
    }
  dequeue(){
    if (this.an2.length === 0) {
      if(this.an1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (this.an1.length > 0) {
     let value = this.an1.shift();
        this.top = this.an1[this.an1.length-1];
        return value;
    }
  }
  return this.an2.pop();
      }
    
      
}