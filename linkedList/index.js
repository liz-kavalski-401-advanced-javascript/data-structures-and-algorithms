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
      if(current.next === value){
        return true;
      };
      current = current.next;
    };
    if(current.value === value){
      return true;
    }
    return false;
  };
};

let list = new LinkedList();


console.log(list);