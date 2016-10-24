function getRandom(floor, ceiling) {
    var num = ceiling - floor;
    return Math.floor(Math.random() * num) + floor;
}

function swap(arr, i, k) {
    var temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
}

function shuffle(arr) {
    for (var i = 0;i < arr.length;i++) {
        var randomIndex = getRandom(i, arr.length);
        swap(arr, i, randomIndex);
    }

    return arr;

}

console.log(shuffle([1,2,3,4,5,6,7]));
