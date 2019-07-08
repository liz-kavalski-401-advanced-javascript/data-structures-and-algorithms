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

  insert(value) {
  this.head = new Node(value,this.head);
  }
  includes(value) {
    let current = this.head;
    while(current) {
      if(current.value === value){
        return true;
      };
      current = current.next;
    };

    current.next = new Node(value);
    this.tail = current.next;

  };
};

let list = new LinkedList();


console.log(list);