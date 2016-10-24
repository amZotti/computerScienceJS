//incomplete: left/right rotations

'use strict';

const RED = Symbol('RED');
const BLACK = Symbol('BLACK');

//let { BinarySearchTree, Node, assertion }  = require('./binarySearchTree');

class RedBlackNode extends Node {
    constructor(val, parent) {
        super(val, parent);
        this.color = RED;
    }

}

class RedBlackTree extends BinarySearchTree {
    constructor(NodeKlass) {
        super(NodeKlass);
    }

    insert(val) {
        super.insert(val);
        this._rebalance();
    }

    _rebalance() {
        recurse.call(this, this.root);


        function recurse(node) {
            if (node.left !== null) {
                recurse.call(this, node.left);
            }

            if (node.right !== null) {
                recurse.call(this, node.right);
            }

            if (this.root === node) {
                if (node.color === RED) {
                    this.root.color = BLACK;
                }
                return;
            }

            let grandParent = BinarySearchTree.getGrandParent(node);

            let uncle = BinarySearchTree.getUncle(node);

            if (grandParent === null) {
                return;
            }

            let parent = node.parent;

            if (parent.color === BLACK) {
                return;
            }

            if (uncle === null || uncle.color === BLACK) {
                if (node === parent.right && parent === grandParent.left) {
                    this.rotateLeft(parent, grandParent);
                    //Wtf is this for?
                    //node = node.left;
                } else if (node === parent.left && parent === grandParent.right) {
                    this.rotateRight(parent, grandParent);
                    //node = node.right;
                }
                return;
            }

            if (uncle.color === RED) {
                uncle.color = BLACK;
                parent.color = BLACK;
                grandParent.color = RED;
            }
        }
    }

    rotateLeft(parent, grandParent) {
        grandParent.right = parent.left;
        parent.left = grandParent;
    }

    rotateRight(parent, grandParent) {
        grandParent.left = parent.right;
        parent.right = grandParent;
    }
}

let rbt = new RedBlackTree(RedBlackNode);
rbt.insert(100);
rbt.insert(10);
rbt.insert(1000);
rbt.insert(1);
rbt.insert(2);
rbt.insert(3);

console.log('rbt: ', rbt);
