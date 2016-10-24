'use strict';

function partition(arr) {

    let left = 0;
    let right = arr.length - 1;
    let pivot = arr[ arr.length - 1 ];
    while (left <= right) {

        while (arr[ left ] < pivot) {
            left++;
        }

        while(arr[ right ] > pivot) {
            right--;
        }

        if (left <= right ) {
            let temp = arr[ left ];
            arr[ left ] = arr[ right ];
            arr[ right ] = temp;

            right--;
            left++;
        }
    }

    if (left === arr.length) {
        left--;
    }

    return left;
}

function qsort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let sliceIndex = partition(arr);

    let leftPartition = arr.slice(0, sliceIndex);
    let rightPartition = arr.slice(sliceIndex);

    return qsort(leftPartition).concat(qsort(rightPartition));
}

console.log(qsort([15,5,2,2,1,5,2,66]));
