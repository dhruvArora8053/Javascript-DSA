"use strict";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    let index = this.values.length - 1;
    let parentIndex = Math.floor(index - 1 / 2);
    while (this.values[parentIndex] < this.values[index]) {
      let temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor(index / 2);
    }
    return this;
  }

  //remove or extract max:
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    //bubble down
    this.sinkDown();
    return max;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

const heap = new MaxBinaryHeap();
console.log(heap);

// heap
//   .insert(4)
//   .insert(13)
//   .insert(8)
//   .insert(1)
//   .insert(25)
//   .insert(5)
//   .insert(17)
//   .insert(100)
//   .insert(36)
//   .insert(19)
//   .insert(9)
//   .insert(6)
//   .insert(11)
//   .insert(12)
//   .insert(15);

heap
  .insert(41)
  .insert(39)
  .insert(33)
  .insert(18)
  .insert(27)
  .insert(12)
  .insert(55)
  .insert(1)
  .insert(45)
  .insert(199);
console.log(heap);
