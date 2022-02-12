/**
 * Iterator 반복자 패턴
 */

abstract class Iterator2 {
  abstract next: () => boolean;
  abstract current: () => object;
}

abstract class Aggregator {
  abstract iterator: () => Iterator2;
}

class Item {
  private name: string;
  private int: cost;

  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }

  public toString() {
    return `(${this.name}, ${this.cost})`;
  }
}

class Array2 implements Aggregator {
  private items: Items[];

  public constructor(items: Items[]) {
    this.items = items;
  }

  public getItem(index: number) {
    return this.items[index];
  }

  public getCount() {
    return this.items.length;
  }

  public iterator(): Iterator2 {
    return new ArrayInterator(this);
  }
}

class ArrayInterator implements Iterator2 {
  private array: Array2;
  private index: number;

  constructor(array: Array2) {
    this.array = array;
    this.index = -1;
  }

  public next(): boolean {
    this.index++;
    return this.index < this.array.getCount();
  }

  public current(): object {
    return this.array.getItem(index);
  }
}

function main() {
  const items = [
    new Item("CPU", 1000),
    new Item("KEY", 2000),
    new Item("Mouse", 3000),
    new Item("HDD", 4000),
  ];
  const array = new Array2(items);

  const it: Iterator2 = array.iterator();

  while (it.next()) {
    const item: Item = it.current();
    console.log("item", item);
  }
}
