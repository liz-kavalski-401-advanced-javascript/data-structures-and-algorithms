'use strict'

require('../../trees/tree.js');

class extends BinaryTree{
    findMaxium(tree) {
        let maxValue = 0;
        if(tree.root !== null && typeof tree.root === "number" ){
            let _walk= node =>{
                let left = node.left;
                let right = node.right;
                if (left){
                    if( left.value > maxValue){
                        maxValue = left.value;
                    };
                };
                if(right){
                    if(right.value > maxValue){
                        maxValue = right.value;
                    };
                };
                };
                _walk(tree.root);
            }else{console.log('Tree dose not exist')}
           
            return maxValue;
            }
        }