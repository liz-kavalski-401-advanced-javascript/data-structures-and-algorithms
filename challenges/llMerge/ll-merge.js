let linkedList = require('../../linkedList/linkedlist')


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

  module.exports = mergeLinkedLists;