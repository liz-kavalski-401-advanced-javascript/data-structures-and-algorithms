'use strict'
class HashMap {
    constructor(size) {
      this.size = size;
      this.map = new Array(size);
    }
  
    hash(key) {
      return key.split('').reduce( (acc,val) => {
        return acc + val.charCodeAt(0)
      }, 0) * 599 % this.size;
    }
  
    add(key,value) {
      let hashValue = this.hash(key);
      if( !this.map[hashValue]) { this.map[hashValue] = []; }
      this.map[hashValue].push({[key]:value});
    }
  
    contains(key) {
      let hashKey = this.hash(key);
      for(let i=0; i<this.map[hashKey].length; i++) {
        if( this.map[hashKey][i][key] ) { return true;}
      }
      return false;
    }
  
    get(key) {
        let hashKey = this.hash(key);
      for(let i=0; i<this.map[hashKey].length; i++) {
        if( this.map[hashKey][i][key] ) { return [key]}
      }
    }
  
  }