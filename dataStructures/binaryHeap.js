'use strict';

class BinaryHeap {
    constructor () {
        this.nodes = [0];
    }

    hasNodes() {
        //console.log(this.nodes.length);
        return this.nodes.length > 1;
    }

    findParentIndex (index) {
        return Math.floor(index / 2);
    }

    findChildIndex (index) {
        return Math.floor(index * 2);
    }

    insert (node) {
        this.nodes.push(node);
        let index = this.nodes.length - 1;
        let flag = true;

        while (flag && index !== 0) {
            let parentIndex = this.findParentIndex(index);
            let parentNode = this.nodes[parentIndex];

            if (node.value < parentNode.value) {
                this.nodes[index] = parentNode;
                this.nodes[parentIndex] = node;
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
        let returnValue = this.nodes[ currentIndex ] || null;
        this.nodes[ currentIndex ] = this.nodes.pop();
        let currentNode = this.nodes[ currentIndex ];

        while(currentIndex < this.nodes.length) {

            let leftIndex = this.findChildIndex(currentIndex);
            let rightIndex = leftIndex + 1;

            let leftChild = this.nodes[ leftIndex ];
            let rightChild = this.nodes[ rightIndex ];

            if (!leftChild) {
                return returnValue;
            } else if (!rightChild) {
                if (leftChild.value > currentNode.value) {
                    this.swap(leftIndex, currentIndex);
                    return returnValue;
                } else {
                    return returnValue;
                }
            } else if (leftChild.value > currentNode.value && rightChild.value > currentNode.value) {
                return returnValue;
            }

            if (leftChild.value === rightChild.value) {
                return returnValue;
            } else if (leftChild.value < rightChild.value) {
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

/*
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
*/

module.exports = BinaryHeap;
