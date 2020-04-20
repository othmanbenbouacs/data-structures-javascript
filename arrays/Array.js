const log = console.log;

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const itemToDelete = this.data[index];
    this.shiftItemsToTheLeft(index);
    this.length--;
    return itemToDelete;
  }

  shiftItemsToTheLeft(index) {
    for (let i = index; i < this.length; i++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
  }
}

const newArray = new MyArray();
newArray.push("othman");
newArray.push("amina");
newArray.push("!");
newArray.push("!");
newArray.pop();
log(newArray);
newArray.delete(1);
log(newArray);