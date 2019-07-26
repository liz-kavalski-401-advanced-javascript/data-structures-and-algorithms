const Queue = require('../../stacksAndQueues/stacks-and-queues.js')

class AnimalShelter{
  constructor() {
      this.cat = new Queue;
      this.dog= new Queue;
      //if the the require and export dose not work
      // this.front = null;
      // this.rear = null;
      // this.cat= [];
      // this.dog= [];

  }
  enqueue(animal){
    if(animal === 'cat'){
      this.cat.push(animal);
      return this.cat
    }
    if( animal === 'dog'){
      this.dog.push(animal);
      return this.dog
    }
   }


  dequeue(pref){
    if (pref !== 'cat' || pref !== 'dog'){
      return null
    } 
    if(pref === 'cat'){
     let pref = this.cat.shift();
        this.front = this.cat
        this.cat.shift();
        return this.cat
    }
    if(pref === 'dog'){
      let pref = this.dog.shift();
        this.front = this.dog
        this.dog.shift();
        return this.dog
    }
  }
    
      
}
let animalList = new AnimalShelter
animalList.enqueue('cat')
animalList.enqueue('cat')
animalList.enqueue('cat')

animalList.enqueue('dog')
animalList.enqueue('dog')
animalList.enqueue('dog')

animalList.dequeue('cat')
animalList.dequeue('dog')
console.log(animalList.cat)
console.log(animalList.dog)
console.log(animalList)