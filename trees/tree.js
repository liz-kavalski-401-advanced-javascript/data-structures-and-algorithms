//import { newExpression } from "@babel/types";

class Node{
    constructor(){
    this.value =value;
    this.left = null;
    this.right =null;
    }
  }
  
  class BinaryTree{
    constructor(root = null){
      this.root = root
  
    };
    preOrder(){
      let results =[];
       let _walk= node =>{
         results.push(node.value);
         if(node.left){_walk(node.left)}
         if(node.right){_walk(node.right)}
       };
       _walk(this.root);
  
       return results;
    };
    inOrder(){ 
      let results =[];
        let _walk= node =>{
          if(node.left){_walk(node.left)}
          results.push(node.value);
          if(node.right){_walk(node.right)}
        };
        _walk(this.root);
  
        return results;
    }
    postOrder(){
      let results =[];
       let _walk= node =>{
         if(node.left){_walk(node.left)}
         if(node.right){_walk(node.right)}
        results.push(node.value);
       };
       _walk(this.root);
  
       return results;
    }
    levelOrder(){
      let results =[];
      let nodeQueue=[];
  
      nodeQueue.push(this.root);
  
      while(nodeQueue.length){
        let current = nodeQueue.shift();
        results.push(current.value);
        if(current.left){nodeQueue.push(current.left)};
        if(current.right){nodeQueue.push(current.right)};
      }
    }

    }
    class BinarySearchTree{
        constructor(root = null){
          this.root = root
      
        };
    };
    add(value){
      let current = this.root
        if(this.root = null){
            this.root = new Node(value);
        }
        while(current){
            if(current.value < value ){
                this.current.right = new Node(value);
            }
            if(current.value > value){
                this.current.left = new Node(value);
            }
        }
    };
    contains(value){
        if(this.root === null){
            return false
        }
        if(this.root === value){
            return true;
        }
        if(root.value > value){
            return this.contains(value,current.left);
        } else{
            return this.contains(value, current.right)
        }

    };
