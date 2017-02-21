class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.length = 1;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value > value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
    this.length++;
  }

  contains(value) {
    if (this.value === value) {
      return true
    }
    else {
      if (this.left && this.value > value) {
        return this.left.contains(value)
      } else if (this.right && this.value < value) {
        return this.right.contains(value)
      }
    }
    return false;
  }

  depthFirstForEach() {

  }

  breadthFirstForEach() {

  }

  size() {
    return this.length;
  }
}
