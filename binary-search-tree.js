class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    } else {
      let currentNode = this.root;
      while (currentNode) {
        console.log(currentNode);
        if (currentNode.val > val) {
          if (!currentNode.left) {
            currentNode.left = new Node(val);
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.val < val) {
          if (!currentNode.right) {
            currentNode.right = new Node(val);
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!node) {
      this.root = new Node(val);
    } else {
      if (node.val > val) {
        if (!node.left) {
          node.left = new Node(val);
        } else {
          this.insertRecursively(val, node.left);
        }
      } else if (node.val < val) {
        if (!node.right) {
          node.right = new Node(val);
        } else {
          this.insertRecursively(val, node.right);
        }
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node) {
      if (node.val === val) {
        return node;
      } else if (node.val > val) {
        return this.findRecursively(val, node.left);
      } else if (node.val < val) {
        return this.findRecursively(val, node.right);
      }
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root) {
    let arr = [node.val];
    if (node.left) {
      let left = this.dfsPreOrder(node.left);
      arr = [...arr, ...left];
    }
    if (node.right) {
      let right = this.dfsPreOrder(node.right);
      arr = [...arr, ...right];
    }
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root) {
    let arr = [node.val];
    if (node.left) {
      let left = this.dfsInOrder(node.left);
      arr = [...left, ...arr];
    }
    if (node.right) {
      let right = this.dfsInOrder(node.right);
      arr = [...arr, ...right];
    }
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root) {
    let arr = [node.val];
    if (node.right) {
      let right = this.dfsPostOrder(node.right);
      arr = [...right, ...arr];
    }
    if (node.left) {
      let left = this.dfsPostOrder(node.left);
      arr = [...left, ...arr];
    }
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let arr = [];
    while (queue.length) {
      let current = queue.shift();
      arr.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  // remove(val) {

  // }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;
