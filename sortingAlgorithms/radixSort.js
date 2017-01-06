'use strict';

let radixSort = (array, maximumValue = Math.max(...array)) => {
    let result = [],
        valuesToIndices = [];

    for (let i = 0; i <= maximumValue; i++)
        valuesToIndices.push(0);

    array.forEach(number => {
        valuesToIndices[number]++;
    });

    valuesToIndices.forEach((count, number) => {
        while (count--)
            result.push(number);
    });

    return result;
};

let randomGenerator = (minimumValue, maximumValue) => {
    return Math.floor(Math.random() * (maximumValue - minimumValue + 1) + minimumValue);
};

let createRandomArray = (size, minimumValue = 0, maximumValue = 10000000) => {
    let result = [];

    while (size--)
        result.push(randomGenerator(minimumValue, maximumValue));

    return result;
};

let instance = createRandomArray(5000);
console.log('before', instance);
console.log('after', radixSort(instance));