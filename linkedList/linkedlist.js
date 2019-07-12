'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //place a node at the end (tail)
  append(value) {
    if(!this.head) {
      this.head = new Node(value);
      return;
    }
   //tranversing 
    let current = this.head;
    while(current.next) {
      current = current.next;
    }

    current.next = new Node(value);
    this.tail = current.next;

  }
  //place a value at the head of the linked list
  insert(value) {
  let current = new Node(value);
  current.next = this.head;
  this.head =current;
  }
  //look for the value
  includes(value) {
    if (!this.head){
      return false};
    let current = this.head;
    while(current.next) {
      if(current.value === value){
        return true;
      };
      current = current.next;
    };
    if(current.value === value){
      return true;
    }
    return false;
  };
  print(){
    let current =this.head;
    let strArray=[];
      while (current){
     strArray.push(current.value)
     current=current.next;
    } 
    
    return strArray.toString()
  }
  formTheEnd(k){
    if(k <= 0){
      console.log('please pick a postive number that is more then zero');
    }
    let current = this.head;
    let counter = -1;
    while(current !== null){
      counter++;
      current = current.next;
    }
    console.log(counter);
      if (counter <= 1){
        console.log('your linklist length is only one')
      }
      if( k >= counter){
        console.log('The number is greater or even to the length of the linked list')
      }
      current = this.head;
      while( counter > k){
        counter--;
        current = current.next;
      }
      console.log(current.value)
  }
  //instertBefore(value, newVal){
    //if(this.head.value === value)
//   }
// insertAfter(value,newVal)
  
};





module.exports = LinkedList;
// let list = new LinkedList();
// list.append('cat');
// list.append (2);
// list.append(4);
// list.insert('pizza');
// list.insert('dog');
// list.formTheEnd(2)
// //console.log(list.includes('dog'));
// console.log(list.print());
// //console.log(list);