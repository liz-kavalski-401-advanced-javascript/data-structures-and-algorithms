'use strict';

const LinkedList = require('../linkedlist.js');

describe('append', ()=>{
    it('inserts a value at the end of the list', ()=>{
      let list = new LinkedList();
      list.append('frog');
      list.append('here');
      list.append(2);
      expected(list.append).toBe('frog','here', 2)
    it('inserts at the begining of a link list',() =>{
      let list = new LinkedList();
      list.insert('herro');
      expected().toBe()
    })
   Xit('insert a node before the current',()=>{
      let list = new LinkedList();
      list.insertBefore('the', 'frog');
      expected().toBe()
    })
   Xit('insert a node after the current',() =>{
      let list = new LinkedList();  
      list.insertAfter('kermit', 'herro');
    })  
    it('should see if the linked list include the given value',()=>{
      let list = new LinkedList();
      list.includes('kermit');
      list.includes('pie');
      expected().toBe(Boolean);
    })      
    it('make the linked list into a string') 
      let list = new LinkedList();
      list.print();
      expected().toBe(String);
      //console.log('list',list);
      //console.log('test 1',list.head.value);
     // expect(list.head.value).toBe(expected);
    });
  });