'use strict';

class BinaryHeap {
    constructor () {
        this.nodes = [0];
    }

    findParentIndex (index) {
        return Math.floor(index / 2);
    }

    findChildIndex (index) {
        return Math.floor(index * 2);
    }

    insert (value) {
        this.nodes.push(value);
        let index = this.nodes.length - 1;
        let flag = true;

        while (flag && index !== 0) {
            let parentIndex = this.findParentIndex(index);
            let parent = this.nodes[parentIndex];

            if (value > parent) {
                this.nodes[index] = parent;
                this.nodes[parentIndex] = value;
                index = parentIndex;
            } else {
                flag = false;
            }
        }
    }

    swap(index1, index2) {
        let temp = this.nodes[index1];
        this.nodes[index1] = this.nodes[index2];
        this.nodes[index2] = temp;
    }

    extract() {
        let currentIndex = 1;
        let returnValue = this.nodes[ currentIndex ];
        this.nodes[ currentIndex ] = this.nodes.pop();
        let currentValue = this.nodes[ currentIndex ];

        while(currentIndex < this.nodes.length) {

            let leftIndex = this.findChildIndex(currentIndex);
            let rightIndex = leftIndex + 1;

            let leftChild = this.nodes[ leftIndex ];
            let rightChild = this.nodes[ rightIndex ];

            if (!leftChild) {
                return returnValue;
            } else if (!rightChild) {
                if (leftChild > currentValue) {
                    this.swap(leftIndex, currentIndex);
                    currentIndex = leftIndex;
                } else {
                    return returnValue;
                }
            } else if (leftChild < currentValue && rightChild < currentValue) {
                return returnValue;
            }

            if (leftChild > rightChild) {
                this.swap(leftIndex, currentIndex);
                currentIndex = leftIndex;
            } else {
                this.swap(rightIndex, currentIndex);
                currentIndex = rightIndex;
            }

        }

        return returnValue;
    }
}

let heap = new BinaryHeap();
heap.insert(6);
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(10);
heap.insert(50);
heap.insert(30);
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());
console.log(heap.extract());

