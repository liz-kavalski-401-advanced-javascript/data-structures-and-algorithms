'use strict'
require('../../trees/tree.js')

class extends BinaryTree{
  breadth(root){
      let queue =[root];
      let output=[];
      if(!root){
          return "Not a tree";
      };
      while(queue.length){
          let currentNode =queue.shift();
              output.push(currentNode.value);
          if(currentNode.left){
              queue.push(currentNode.left);
          };
          if(currentNode.right){
              queue.push(currentNode.right);
          };
      };
      return output;
  };
    
};