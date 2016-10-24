function bubble(arr) {
    var swapped = true;
    while (swapped) {

        swapped = false;

        for (var i = 0;i < arr.length - 1;i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true
            }
        }
    }

    return arr;
}

console.log(bubble([1,5,3,1,432,12,5,31]));
