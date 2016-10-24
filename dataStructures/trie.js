'use strict';

class PrefixTree {
    constructor() {
        this.root = {};
    }

    insert(str) {
        Array.prototype.reduce.call(str, (trav, char) => {
            if (!trav[char]) {
                trav[char] = {};
            } 

            return trav[char];
        }, this.root);
    }


}

let tree = new PrefixTree();
tree.insert('hello');
tree.insert('health');
console.log(tree);

function reduce(arr, fn, initialValue) {
    for (var i = 0;i < arr.length;i++) {

    }

}

Array.prototype.tonysReduce =  (fn, initialValue) => {
    console.log('this: ', this);
    for (let i = 0;i < this.length;i++) {
        console.log(initialValue);
        initialValue = fn(initialValue, this[i], i, this)
    }

    return initialValue;
};

let arr = [1,2,3,4];

let val = arr.tonysReduce((initialValue, num) => {
    return initialValue + num;
}, 0);

console.log(val);
