'use strict';

const merge = (arr1, arr2) => {
    let results = [];
    while (arr1.length !== 0 && arr2.length !== 0) {
        if (arr1[0] < arr2[0]) {
            results.push(arr1.shift());
        } else {
            results.push(arr2.shift());
        }
    }

    return results.concat(arr1).concat(arr2);
}

const mergeSort = (array) => {

    if (array.length <= 1) {
        return array;
    }

    let split = Math.floor((array.length) / 2);

    let leftSplit = mergeSort(array.slice(0, split));

    let rightSplit = mergeSort(array.slice(split));

    return merge(leftSplit, rightSplit);

}

let arr = [1, 5, 3, 2, 7, 10, 9, 9, 8, 6, 5, 3];
console.log(mergeSort(arr));
