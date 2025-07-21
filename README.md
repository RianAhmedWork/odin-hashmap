# Hashmap

## A simple implementation of a hashmap data structure in JavaScript

As the subtitle suggests this is a simple implementation of a hashmap data structure
in JavaScript.

# Methods

- hash(key) takes a key and produces a hashcode with it
- set(key, value) takes in a key and a value, if the key already exists the old value is overwritten
- get(key) takes a key and returns the value assigned to the key. If key is not found return false
- remove(key) takes in a key and removes it and returns true. If key isn't in the hash map return false
- length() returns the number of stored keys in the hash map
- clear() returns an array containing all the keys inside the hashmap.
- values() returns an array containing all the values.
- entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

# Instructions

make sure you have node installed and type "node main.js" in the console while in the directory. You can test your own cases
by modifying the main.js file
