'use strict';

class Node {
    constructor(val, parent) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}

class BinarySearchTree {
    constructor(NodeKlass) {
        this.root = null;
        this.Node = NodeKlass || Node;
    }

    static getGrandParent(node) {
        if (node === null || node.parent === null || node.parent.parent === null) {
            return null;
        }
        return node.parent.parent;
    }

    static getUncle(node) {
        let grandParent = this.getGrandParent(node);

        if (grandParent === null) {
            return null;
        }

        let parent = node.parent;

        if (grandParent.left === parent) {
            return grandParent.right;
        } else {
            return grandParent.left;
        }
    }

    insert(val) {
        if (this.root === null) {
            this.root = new this.Node(val, null);
            return;
        }

        let trav = this.root;
        while((val < trav.val && trav.left !== null) ||
                (val >= trav.val && trav.right !== null)) {
            if (val < trav.val) {
                trav = trav.left;
            } else {
                trav = trav.right;
            }
        }
        if (val < trav.val) {
            trav.left = new this.Node(val, trav);
        } else {
            trav.right = new this.Node(val, trav);
        }
    }

    _find(val) {
        let trav = this.root;
        while(trav.val !== val || (trav.left === null && trav.right === null)) {

            if (val < trav.val && trav.left !== null) {
                trav = trav.left;
            } else if (val >= trav.val && trav.right !== null) {
                trav = trav.right;
            } else {
                break;
            }
        }

        return trav.val === val ? trav : null;

    }

    search(val) {
        let foundNode = this._find(val);
        return foundNode instanceof this.Node;
    }

    delete(val) {
        let foundNode = this._find(val);

        if (foundNode === null) {
            return false;
        }

        let parent = foundNode.parent;
        if (foundNode.left === null && foundNode.right === null) {

            if (parent === null) {
                this.root = null;
                return true;
            }

            if (parent.left === foundNode) {
                parent.left = null;
            } else {
                parent.right = null;
            }
            return true;
        }

        if (foundNode.left !== null && foundNode.right !== null) {
            let trav = foundNode.right;
            while(trav.left !== null) {
                trav = trav.left;
            }

            foundNode.val = trav.val;
            trav.parent.left = trav.right;
            return true;

        }

        if (foundNode.left === null || foundNode.right === null) {
            let replacementNode;

            if (foundNode.right === null) {
                replacementNode = foundNode.left;
            } else {
                replacementNode = foundNode.right;
            }

            if (parent === null) {
                this.root = replacementNode;
                return true;
            }

            if (parent.left === foundNode) {
                parent.left = replacementNode;
            } else {
                parent.right = replacementNode;
            }
            return true;
        }

        return false;
    }
}

const assertion = (actual, expected) => {
    if (actual === expected) {
        console.log(`Passed: ${actual} is equal to ${expected}`);
    } else {
        console.error(`FAILED: ${actual} is not equal to ${expected}`);
    }
}

//module.exports = { BinarySearchTree, Node, assertion };

/*
let bst = new BinarySearchTree(Node);
bst.insert(10);
bst.insert(9);
bst.insert(3);
bst.insert(8);
bst.insert(5);
bst.insert(6);



assertion(bst.root.val, 10);
assertion(bst.search(10), true);
assertion(bst.search(5), true);
assertion(bst.search(7), false);

bst.delete(5);

assertion(bst.search(10), true);
assertion(bst.search(9), true);
assertion(bst.search(3), true);
assertion(bst.search(8), true);
assertion(bst.search(5), false);
assertion(bst.search(6), true);

bst.delete(10);
assertion(bst.search(10), false);
assertion(bst.search(9), true);
assertion(bst.search(3), true);
assertion(bst.search(8), true);
assertion(bst.search(5), false);
assertion(bst.search(6), true);
*/

