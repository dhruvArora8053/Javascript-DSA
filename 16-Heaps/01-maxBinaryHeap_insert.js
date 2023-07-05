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
}

const heap = new MaxBinaryHeap();
console.log(heap);

heap
  .insert(4)
  .insert(13)
  .insert(8)
  .insert(1)
  .insert(25)
  .insert(5)
  .insert(17)
  .insert(100)  
  .insert(36)
  .insert(19)
  .insert(9)
  .insert(6)
  .insert(11)
  .insert(12)
  .insert(15);

// heap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12);
console.log(heap);
