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
  insertBefore(value, target){
    if(!this.head){
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while(current.next.value!==target){
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;

  }

  insertAfter(value, target){
    if(!this.head){
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while(current.value!==target){
      current = current.next;
    }

    let newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }
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
  mergeLinkedLists(L1, L2) {
    let L3 = new LinkedList();
    let currentL1Node = L1.head;
    // console.log(currentL1Node);
    let currentL2Node = L2.head;
    // console.log(currentL2Node);
    while (currentL1Node || currentL2Node) {
      if (currentL1Node.value <= currentL2Node.value) {
        L3.insert(currentL1Node.value);
        currentL1Node = currentL1Node.next;
        console.log(currentL1Node);
      }
      else {
        L3.insert(currentL2Node);
        currentL2Node = currentL2Node.next;
        console.log(currentL2Node.value);
      }
    }
    while (currentL1Node) {
      L3.insert(currentL1Node);
      currentL1Node = currentL1Node.next;
    }
    while (currentL2Node) {
      L3.insert(currentL2Node);
      currentL2Node = currentL2Node.next;
    }
    
    return L3;
  }

  
};





module.exports = LinkedList;

let list1 = new LinkedList();
let list2= new LinkedList();
let list3 = new LinkedList();
 list1.append('cat');
 list1.append('dog');
// list1.append(4);

 list2.append (2);
 list2.append('pizza');
 //list2.append(1);

console.log(list3.mergeLinkedLists(list1,list2));
 //list.formTheEnd(2)
// //console.log(list.includes('dog'));
// console.log(list.print());
// //console.log(list);