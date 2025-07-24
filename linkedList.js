export { LinkedList };

class LinkedList {
  // set the head and tail to be empty until a value is appended
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null && this.tail === null;
  }

  // append to the end of the list
  append(value) {
    const newNode = new Node(value);
    // if the list is empty append a node
    // else add the new node to the tail of the current one
    // and update the tail
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  // prepend the value to the start of the list
  prepend(value) {
    // create node from the value
    const newNode = new Node(value);
    // if the list is empty prepend it
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  // returns the total number of elements in the list;
  size() {
    // if the list has no elements we return 0
    if (this.isEmpty()) {
      return 0;
    }
    // if the nextNode value is not null we update the tempNode to the next
    // and increment the counter
    let tempNode = this.head;
    let counter = 0;
    while (tempNode !== null) {
      counter++;
      tempNode = tempNode.nextNode;
    }
    return counter;
  }

  // return the first element in the list;
  getHead() {
    return this.head;
  }

  // return the last node in the list;
  getTail() {
    return this.tail;
  }

  // returns the node at the specified index
  at(index) {
    // if the list is empty we return a string
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }

    if (index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    // if the index matches the counter we return the value
    let counter = 0;
    let tempNode = this.head;
    while (index !== counter) {
      counter++;
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  // pop the last node
  pop() {
    // if the list is empty we throw an error
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }

    // if the list has one node we just set both head and tail
    // as null
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }

    let tempNode = this.head;
    while (tempNode.nextNode !== this.tail) {
      tempNode = tempNode.nextNode;
    }
    tempNode.nextNode = null;
    this.tail = tempNode;
  }

  // returns true if it finds the value false if not
  contains(value) {
    // search through the list until a match is found
    // or we reach the end
    let tempNode = this.head;
    while (tempNode !== null) {
      if (value === tempNode.value) {
        return true;
      }
      tempNode = tempNode.nextNode;
    }
    return false;
  }

  // find the index of the value if not return null
  find(value) {
    // search through the list until the value is found
    // and return the index at that value else return null
    let counter = 0;
    let tempNode = this.head;
    while (tempNode !== null) {
      if (value === tempNode.value) {
        return counter;
      }
      counter++;
      tempNode = tempNode.nextNode;
    }
    return null;
  }

  // replace the value of the string at the specific index
  replace(value, index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    if (this.isEmpty()) {
      throw new Error("List is empty");
    }

    let counter = 0;
    let tempNode = this.head;
    while (counter !== index) {
      tempNode = tempNode.nextNode;
      counter++;
    }
    tempNode.value = value;
  }

  // represent the list as a string
  toString() {
    // go through the list from head to tail
    // add it to a string and return it
    let tempString = "";
    let tempNode = this.head;
    while (tempNode !== null) {
      tempString += `( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }
    tempString += `${null}`;
    return tempString;
  }

  // insert a value at the specified index
  insertAt(value, index) {
    // store the size of the list
    const listSize = this.size();

    // throw an error if index is out of bounds
    if (index > listSize) {
      throw new Error("Index is out of bounds");
    }

    // if we want to append at the start of the list
    // call the prepend method
    if (index === 0) {
      this.prepend(value);
      return;
    }

    // go through the list until the node before
    // the one we want to insert at
    let counter = 0;
    let tempNode = this.head;
    while (counter !== index - 1) {
      tempNode = tempNode.nextNode;
      counter++;
    }
    let insertedNode = new Node(value);
    insertedNode.nextNode = tempNode.nextNode;
    tempNode.nextNode = insertedNode;

    // if we insert at the end make sure
    // to update the tail
    if (index === listSize) {
      this.tail = insertedNode;
    }
  }

  // remove the node at the specified index
  removeAt(index) {
    // store the size of the list
    const listSize = this.size();

    // throw error if index is out of bounds
    if (index >= listSize || index < 0) {
      throw new Error("Index out of bound");
    }
    let tempNode = this.head;

    // if removing at the head, update
    // the head
    if (index === 0) {
      tempNode = tempNode.nextNode;
      this.head = tempNode;
      return;
    }

    // if removing at the tail, call
    // pop method
    if (index === listSize - 1) {
      this.pop();
      return;
    }

    // loop through until right before
    // the specified index then change
    // the pointer
    let counter = 0;
    while (counter !== index - 1) {
      tempNode = tempNode.nextNode;
      counter++;
    }
    let nodeToRemove = tempNode.nextNode;
    tempNode.nextNode = nodeToRemove.nextNode;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
