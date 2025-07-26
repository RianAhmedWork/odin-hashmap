import { LinkedList } from "./linkedList";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from(
      { length: this.capacity },
      () => new LinkedList()
    );
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    this.checkLoad();
    const hashedKey = this.hash(key);
    const pair = { key: key, value: value };
    const bucket = this.buckets[hashedKey];
    if (bucket.isEmpty() || !bucket.containsKey(key)) {
      bucket.append(pair);
    } else {
      bucket.replaceValue(value, bucket.findKey(key));
    }
  }

  get(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];
    return bucket.getKey(key);
  }

  has(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];
    return bucket.containsKey(key);
  }

  remove(key) {
    const hashedKey = this.hash(key);
    const bucket = this.buckets[hashedKey];
    if (bucket.containsKey(key)) {
      bucket.removeAt(bucket.findKey(key));
      return true;
    } else {
      return false;
    }
  }

  length() {
    let totalLength = 0;
    this.buckets.forEach((item) => {
      totalLength += item.size();
    });
    return totalLength;
  }

  clear() {
    this.buckets.forEach((item) => {
      item.clearList();
    });
  }

  keys() {
    let array = [];
    this.buckets.forEach((item) => {
      array.push(...item.getAllKeys());
    });
    return array;
  }

  values() {
    let array = [];
    this.buckets.forEach((item) => {
      array.push(...item.getAllValues());
    });
    return array;
  }

  entries() {
    let array = [];
    this.buckets.forEach((item) => {
      array.push(...item.getAllEntries());
    });
    return array;
  }

  checkLoad() {
    let currentLoadFactor = () => {
      let counter = 0;
      this.buckets.forEach((item) => {
        if (!item.isEmpty()) {
          counter++;
        }
      });
      return counter / this.capacity;
    };

    if (currentLoadFactor() > this.loadFactor) {
      this.increaseLoad();
    }
  }

  increaseLoad() {
    let oldEntries = this.entries();
    this.capacity = this.capacity * 2;
    this.buckets.length = this.capacity;
    for (let i = this.capacity / 2; i < this.capacity; i++) {
      if (!this.buckets[i]) {
        this.buckets[i] = new LinkedList();
      }
    }
    oldEntries.forEach((item) => {
      this.set(item[0], item[1]);
    });
  }
}
