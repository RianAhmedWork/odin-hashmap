class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.8;
    this.buckets = new Array(this.capacity).fill(null);
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
    hashedKey = this.hash(key);
    const pair = { key: key, value: value };
    if (this.buckets[hashedKey].key === key) {
      this.buckets[hashedKey].value = value;
    } else {
      this.buckets[hashedKey] = pair;
    }
  }
}
