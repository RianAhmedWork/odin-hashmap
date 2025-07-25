import { LinkedList } from "./linkedList";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.8;
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
    const hashedKey = this.hash(key);
    const pair = { key: key, value: value };
    const bucket = this.buckets[hashedKey];
    if (bucket.isEmpty() || !bucket.containsKey(key)) {
      bucket.append(pair);
    } else {
      bucket.replaceValue(value, bucket.findKey(key));
    }
  }
}
