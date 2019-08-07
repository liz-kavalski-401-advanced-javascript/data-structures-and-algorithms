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
  };
function fizzBuzz(tree){
    if(this.root.value === null){
        return 'their no tree';
    };
    if(this.root.value % 3 === 0){
        this.root.value === 'fizz'
    };
    if(this.root.value % 5 === 0){
        this.root.value === 'buzz'
    };
    if(this.root.value % 3 === 0 && this.root.value % 5 === 0){
        this.root.value === 'fizzbuzz'
    };

    let _walk = (node) =>{
        if(this.node.value % 3 === 0){
            this.node.value === 'fizz'
        };
        if(this.node.value % 5 === 0){
            this.node.value === 'buzz'
        };
        if(this.node.value % 3 === 0 && this.node.value % 5 === 0){
            this.node.value === 'fizzbuzz'
        };
        if(this.node.left){_walk(node.left)}
        if(this.node.right){_walk(node.right)}
    }
    return tree
};