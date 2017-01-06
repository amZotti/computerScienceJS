let binarySearch = (array, value) => {
    let lowIndex = 0,
        middleIndex,
        highIndex = array.length - 1;

    while (lowIndex <= highIndex) {
        middleIndex = Math.floor((lowIndex + highIndex) / 2);

        if (array[middleIndex] < value) {
            lowIndex = middleIndex + 1;
        } else if (array[middleIndex] > value) {
            highIndex = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }

    return null;
};

// array must be already ordered
let instance = [1, 2, 3, 4, 5, 6, 8, 20];
console.log('hit at index ' + ordinarySearch(instance, 2));
console.log('fail ' + ordinarySearch(instance, 10));