function insertionSort(arr) {
    for (var i = 1;i < arr.length;i++) {
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            var temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;

            j--;
        }
    }
    return arr;
}

console.log(insertionSort([1,5,3,1,432,12,5,31]));
