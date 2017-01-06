'use strict';

let ordinarySearch = (array, value) => {
    let index = array.indexOf(value);
    return index !== -1 ? index : null;
};

let instance = [1, 2, 3, 4, 5, 6, 8, 20];
console.log('hit at index ' + ordinarySearch(instance, 2));
console.log('fail ' + ordinarySearch(instance, 10));