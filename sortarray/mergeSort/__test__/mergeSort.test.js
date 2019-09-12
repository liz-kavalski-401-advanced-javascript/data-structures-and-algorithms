'use strict';

const mergeSort = require('../mergeSort.js');

describe('Merge Sort', () => {
  it('works as expected', () => {
    let arrayOne = [9, 2, 7, 4, 3, 1, 5, 6, 8]
    expect(mergeSort(arrayOne)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it(`returns array if length is less than 1`, () => {
    let arrayTwo = []
    expect(mergeSort(arrayTwo)).toEqual([]);
    
  });
  it(`returns message if element in array is not a number`, () => {
    let arrayThree = 'I am not an array';
    expect(mergeSort(arrayThree)).toBe('I am not an array');
  });
});