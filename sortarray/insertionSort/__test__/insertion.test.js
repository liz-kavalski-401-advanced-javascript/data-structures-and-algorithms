'use strict';

const insertionSort = require('../insertionSort.js');

describe( 'Use the insertion sort to sort', () => {
  it('works as expected', () => {
    let arrayOne = [9, 2, 7, 4, 3, 1, 5, 6, 8]
    expect(insertionSort(arrayOne)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })
  it(`returns message if array is empty`, () => {
    let arrayTwo = []
    expect(insertionSort(arrayTwo)).toBe('there is nothing in the array');
  })
  it(`returns message if element in array is not a number`, () => {
    let arrayThree = ['a', 'b', 'c'];
    expect(insertionSort(arrayThree)).toBe('please enter a number');
  })
});